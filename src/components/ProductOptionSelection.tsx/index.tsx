"use client";

import {
  ProductDetail,
  ProductOption,
  ProductVariant,
} from "@/utilities/types/product.type";
import React, { useEffect, useMemo, useState } from "react";
import VariantOptions from "./VariantOptions";
import { BASE_STATUS } from "@/utilities/types/common.type";

type Props = {
  productDetail: ProductDetail | null;
  onSelect: (variant?: ProductVariant) => void;
};

export type SelectVariants = Record<ProductOption["id"], ProductVariant["id"]>;

const ProductionOptionSelection = ({ productDetail, onSelect }: Props) => {
  const [selectedVariants, setSelectedVariants] = useState<SelectVariants>({});

  const productOptions = productDetail?.productOptions || [];

  useEffect(() => {
    const firstActiveVariant = productDetail?.productVariants?.find(
      (variant) => variant.status === BASE_STATUS.ACTIVE,
    );

    const initOption: SelectVariants =
      firstActiveVariant?.productVariantOptionDetails?.reduce((all, item) => {
        const key = item?.productOptionDetail?.productOptionId;
        const value = item?.productOptionDetailId;
        if (key && value) return { ...all, [key]: value };
        return all;
      }, {}) || {};

    setSelectedVariants(initOption || {});
  }, [productDetail, setSelectedVariants]);

  const selectedInfo = useMemo(() => {
    const variant = productDetail?.productVariants?.find((productVariant) =>
      productVariant?.productVariantOptionDetails?.every(
        (variantOptionDetail) => {
          const key = variantOptionDetail?.productOptionDetail?.productOptionId;
          const value = variantOptionDetail?.productOptionDetailId;

          if (key === undefined || value === undefined) return false;

          return selectedVariants?.[key] === value;
        },
      ),
    );

    return variant;
  }, [productDetail?.productVariants, selectedVariants]);

  useEffect(() => {
    onSelect(selectedInfo);
  }, [onSelect, selectedInfo]);

  return (
    <div>
      {productOptions?.map((productOption) => (
        <div key={productOption?.id} className="mb-4">
          <p className="text-base font-bold">{productOption?.name}</p>
          <VariantOptions
            productDetail={productDetail}
            productOption={productOption}
            selectedVariants={selectedVariants}
            setSelectedVariants={setSelectedVariants}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductionOptionSelection;
