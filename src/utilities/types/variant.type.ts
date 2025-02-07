type ProductOptionDetail = {
    id: number;
    value: string;
    productOptionId: number;
  };
  
export type ProductVariantOptionDetail = {
  id: number;
  productOptionDetailId: number;
  productVariantId: number;
  productOptionDetail: ProductOptionDetail;
};

export type ProductVariantType = {
  id: number;
  name: string;
  status: number;
  sku: string;
  price: number;
  productId: number;
  productVariantOptionDetails: ProductVariantOptionDetail[];
};
