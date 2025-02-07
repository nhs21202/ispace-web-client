import { vndString } from "@/utilities/helper/string.helper";
import { CartItem } from "@/utilities/types/cart.type";
import { BASE_STATUS } from "@/utilities/types/common.type";
import { InputNumber, Button, TableColumnsType } from "antd";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import InputNumberWithArrow from "./InputNumberWithArrow";

export type ActionsType = {
  handleRemoveItem: (cartId: number) => void;
  updateAmount: (cartId: number, amount: number) => void;
};

export const getDesktopColumns = ({
  handleRemoveItem,
  updateAmount,
}: ActionsType) => {
  return [
    {
      title: "Sản phẩm",
      dataIndex: ["product", "name"],
      key: "name",
      width: 200,
      render: (productName: string, record: CartItem) => (
        <div className="flex items-center gap-2">
          <Image
            src={record.featuredImage?.src}
            alt={record.product?.name || "product image"}
            width={56}
            height={56}
            className="h-14 w-14 flex-shrink-0 rounded object-cover"
          />
          <div>
            <p className="line-clamp-2" title={productName}>
              {productName}
            </p>
            {record.productVariant && (
              <p
                className="line-clamp-2 text-xs italic text-gray-500"
                title={record.productVariant.name}
              >
                {record.productVariant.name}
              </p>
            )}
          </div>
        </div>
      ),
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      width: 100,
      render: (quantity: number, record: CartItem) => (
        <InputNumber
          min={1}
          max={9999}
          defaultValue={quantity}
          onChange={(value) => {
            if (value) updateAmount(record.id, value);
          }}
        />
      ),
    },
    {
      title: "Đơn giá",
      dataIndex: "lastPrice",
      key: "lastPrice",
      width: 100,
      render: vndString,
    },
    {
      title: "Tổng tiền",
      dataIndex: "totalLastPrice",
      key: "totalLastPrice",
      width: 100,
      render: vndString,
    },
    {
      key: "action",
      width: 50,
      align: "center",
      className: "!px-0",
      fixed: "right",
      render: (record: CartItem) => (
        <Button
          onClick={() => handleRemoveItem(record.id)}
          disabled={record.product?.status === BASE_STATUS.INACTIVE}
          type="text"
          icon={<MdDelete className="text-xl text-red-500" />}
        />
      ),
    },
  ] as TableColumnsType<CartItem>;
};

export const getMobileColumns = ({
  handleRemoveItem,
  updateAmount,
}: ActionsType) => {
  return [
    {
      title: "Sản phẩm",
      dataIndex: ["product", "name"],
      key: "name",
      render: (productName: string, record: CartItem) => (
        <div>
          <div className="flex items-center gap-2">
            <Image
              src={record.featuredImage?.src}
              alt={record.product?.name || "product image"}
              width={56}
              height={56}
              className="h-14 w-14 flex-shrink-0 rounded object-cover"
            />
            <div className="flex-grow">
              <div className="flex gap-2">
                <div className="flex-grow">
                  <p className="line-clamp-2" title={productName}>
                    {productName}
                  </p>
                  {record.productVariant && (
                    <p
                      className="line-clamp-2 text-xs italic text-gray-500"
                      title={record.productVariant.name}
                    >
                      {record.productVariant.name}
                    </p>
                  )}
                </div>
                <Button
                  onClick={() => handleRemoveItem(record.id)}
                  disabled={record.product?.status === BASE_STATUS.INACTIVE}
                  type="text"
                  icon={<MdDelete className="text-xl text-red-500" />}
                />
              </div>
              <div className="flex flex-wrap justify-between">
                <div className="font-bold text-red-500">
                  {vndString(record.lastPrice)}
                </div>
                <div>
                  <InputNumberWithArrow
                    defaultValue={record.quantity}
                    onChange={(value) => updateAmount(record.id, value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ] as TableColumnsType<CartItem>;
};
