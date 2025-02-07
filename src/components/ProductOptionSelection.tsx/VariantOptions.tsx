"use client";

import React, { useCallback, useMemo } from "react";
import {
  ProductDetail,
  ProductOption,
  ProductOptionDetail,
  ProductVariant,
} from "@/utilities/types/product.type";
import { Tag } from "antd";
import { BASE_STATUS } from "@/utilities/types/common.type";
import { cn } from "@/utilities/helper/common.helper";
import { SelectVariants } from ".";
import { orderBy } from "lodash";

type Props = {
  productDetail: ProductDetail | null;
  productOption: ProductOption;
  selectedVariants: SelectVariants;
  setSelectedVariants: React.Dispatch<React.SetStateAction<SelectVariants>>;
};

const VariantOptions: React.FC<Props> = ({
  productDetail,
  productOption,
  selectedVariants,
  setSelectedVariants,
}) => {
  const variantMapByKey: Record<string, ProductVariant> = useMemo(
    () =>
      productDetail?.productVariants?.reduce((all, currentValue) => {
        const variantKey = orderBy(
          currentValue?.productVariantOptionDetails,
          "productOptionDetailId",
        )
          ?.map((item) => item.productOptionDetailId)
          ?.join("-");

        return {
          ...all,
          [variantKey]: currentValue,
        };
      }, {}) || {},
    [productDetail],
  );

  const handleSelectVariant = (
    optionId: number,
    productOptionDetailId: number,
  ) => {
    setSelectedVariants?.((prev) => {
      if (prev[optionId] === productOptionDetailId) {
        const newState = { ...prev };
        delete newState[optionId];
        return newState;
      }

      return {
        ...prev,
        [optionId]: productOptionDetailId,
      };
    });
  };

  const isOptionSelected = useCallback(
    (productOptionDetailId: ProductOptionDetail["id"]) => {
      if (!productOption?.id) return false;
      return selectedVariants?.[productOption.id] === productOptionDetailId;
    },
    [productOption?.id, selectedVariants],
  );

  const isOptionDisabled = useCallback(
    (productOptionDetailId: ProductOptionDetail["id"]) => {
      if (!productOption?.id) return true;

      const variantKey = Object.values({
        ...selectedVariants,
        [productOption.id]: productOptionDetailId,
      }).join("-");

      const variant = variantMapByKey[variantKey];

      if (!variant) return true;

      return variant.status === BASE_STATUS.INACTIVE;
    },
    [productOption?.id, selectedVariants, variantMapByKey],
  );

  const listOptions = useMemo(() => {
    return productOption?.productOptionDetails?.map((productOptionDetail) => {
      return {
        productOptionId: productOption?.id,
        productOptionDetailId: productOptionDetail?.id,
        label: productOptionDetail?.value,
      };
    });
  }, [productOption?.id, productOption?.productOptionDetails]);

  return (
    <div className="flex flex-wrap items-center">
      {listOptions?.map((item) => {
        const isSelected = isOptionSelected(item.productOptionDetailId);
        const isDisabled = isOptionDisabled(item.productOptionDetailId);

        return (
          <Tag
            key={item.productOptionDetailId}
            className={cn(
              "relative cursor-pointer select-none px-4 py-1 text-sm font-medium",
              {
                "!border-red-600 !bg-red-300 !text-red-600": isSelected,
                "cursor-not-allowed border-gray-500 bg-gray-300 text-black opacity-30":
                  isDisabled,
              },
            )}
            onClick={() =>
              !isDisabled &&
              handleSelectVariant(
                item.productOptionId,
                item.productOptionDetailId,
              )
            }
          >
            <span className="z-10">{item.label}</span>
          </Tag>
        );
      })}
    </div>
  );
};

export default VariantOptions;
