import { CustomerAddress } from "@/utilities/types/customer.type";
import { Card } from "antd";
import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

type Props = {
  addressInfo: CustomerAddress;
  onClickEditBtn?: (address: CustomerAddress) => void;
  onClickDeleteBtn?: (addressId: number | undefined) => void;
};

const AddressCard = ({
  addressInfo,
  onClickEditBtn,
  onClickDeleteBtn,
}: Props) => {
  return (
    <Card className="w-full" bordered={true} size="small">
      <div>
        <p className="font-bold">
          {addressInfo.name} | {addressInfo.phone}
        </p>
        <p className="italic text-[#808080]">Địa chỉ: {addressInfo.address}</p>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <button
          onClick={() => onClickEditBtn?.(addressInfo)}
          className="flex items-center text-gray-600 hover:text-blue-600"
        >
          <FiEdit size={14} />
          <span className="ml-1">Chỉnh sửa</span>
        </button>
        <span className="mx-2 h-full border-r border-gray-300"></span>
        <button
          onClick={() => onClickDeleteBtn?.(addressInfo.id)}
          className="flex items-center text-red-600"
        >
          <FiTrash size={14} />
          <span className="ml-1">Xóa</span>
        </button>
      </div>
    </Card>
  );
};

export default AddressCard;
