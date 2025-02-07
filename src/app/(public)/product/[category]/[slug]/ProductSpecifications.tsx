"use client";

import InputNumberWithArrow from "@/app/(protected)/cart/InputNumberWithArrow";
import ProductionOptionSelection from "@/components/ProductOptionSelection.tsx";
import { ProductDetail, ProductVariant } from "@/utilities/types/product.type";
import React, { useMemo, useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { App, Button } from "antd";
import { MAX_PRODUCT_PER_PRODUCT_IN_CART } from "@/utilities/constant/number";
import { vndString } from "@/utilities/helper/string.helper";
import { useAuth } from "@/contexts/AuthContext";

type Props = {
  productDetail: ProductDetail | null;
};

const ProductSpecifications = ({ productDetail }: Props) => {
  const { addToCart } = useCart();
  const { userInfo, setOpenModalAuth } = useAuth();
  const [quantity, setQuantity] = React.useState(1);
  const [selectedVariants, setSelectedVariants] = useState<ProductVariant>();
  const { modal } = App.useApp();

  const handleAddToCart = () => {
    if (!productDetail) return;

    if (!userInfo) {
      return modal.warning({
        title: "Bạn chưa đăng nhập",
        content: "Vui lòng đăng nhập trước khi thêm sản phẩm vào giỏ hàng.",
        onOk: () => setOpenModalAuth(true),
        closable: true,
        maskClosable: true,
        okText: "Đăng nhập",
        footer(originNode) {
          return <div className="flex justify-center gap-3">{originNode}</div>;
        },
      });
    }

    addToCart({
      productId: productDetail?.id,
      productVariantId: selectedVariants?.id,
      quantity: quantity,
    });
  };

  const priceInfo = useMemo(() => {
    if (!productDetail) return null;

    return {
      isDiscount: !!productDetail?.onSale,
      discountAmount: productDetail?.discount.value,
      discountType: productDetail?.discount.valueType,
      lastPrice: selectedVariants?.lastPrice ?? productDetail.lastPrice,
      price: selectedVariants?.price ?? productDetail.price,
    };
  }, [productDetail, selectedVariants]);

  return (
    <div className="rounded-xl border px-10 py-5">
      <ProductionOptionSelection
        productDetail={productDetail}
        onSelect={setSelectedVariants}
      />

      <p className="text-2xl font-bold">{vndString(priceInfo?.lastPrice)}</p>

      <div className="mt-5 flex flex-col items-start justify-between gap-5">
        <InputNumberWithArrow
          min={0}
          max={MAX_PRODUCT_PER_PRODUCT_IN_CART}
          value={quantity}
          onChange={setQuantity}
        />
        <Button
          onClick={handleAddToCart}
          disabled={!productDetail || quantity <= 0}
        >
          Thêm vào giỏ
        </Button>
      </div>
    </div>
  );
};

export default ProductSpecifications;
