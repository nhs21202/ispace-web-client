import React from "react";
import Image from "next/image";
import { CartItem } from "@/utilities/types/cart.type";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { vndString } from "@/utilities/helper/string.helper";

type Props = {
  data: CartItem;
  onRemove?: () => void;
};

const CartItemComponent = ({ data, onRemove }: Props) => {
  return (
    <div className="group flex items-center justify-between">
      <Image
        width={64}
        height={64}
        src={data.featuredImage?.src}
        alt={data.product?.name || "product image"}
        className="h-16 w-16 rounded object-cover"
      />
      <div className="ml-4 flex-1">
        <h5 className="line-clamp-2 max-w-[200px] text-sm font-medium">
          {data.product?.name}
        </h5>
        <div className="flex flex-wrap items-center justify-start gap-3 text-xs">
          <p>{vndString(data.lastPrice)}</p>
          {!!data.product?.onSale && (
            <p className="italic text-gray-400 line-through">
              {vndString(data.originalPrice)}
            </p>
          )}
        </div>

        <p className="text-xs">Số lượng: {data.quantity}</p>
      </div>

      <button className="ml-3 text-red-500" onClick={onRemove}>
        <IoMdCloseCircleOutline size={24} />
      </button>
    </div>
  );
};

export default CartItemComponent;
