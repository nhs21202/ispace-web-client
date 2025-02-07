import {
  PageSection,
  PostDataSection,
  ProductSectionData,
  ProductSectionListItem,
  TextImagePSA,
} from "@/utilities/types/pageSection.type";
import { compact } from "lodash";
import { BaseCategory } from "../types/category.type";
import { SLUG_POST_DEFAULT, SLUG_PRODUCT_DEFAULT } from "../constant";

export const getSectionByKey = (list: PageSection[], sectionKey: string) => {
  return list?.find((item) => item.key === sectionKey);
};

export const getPostData = (
  list: PageSection[],
  sectionKey: string,
  extra?: { postSlug?: string },
): PostDataSection => {
  try {
    const { postSlug = SLUG_POST_DEFAULT } = extra || {};

    const postSection = getSectionByKey(list, sectionKey);
    const sectionData = postSection?.psaValueExpected;
    const postList = sectionData?.post_list as unknown as {
      title: string;
      summary?: string;
      featuredImage: { src?: string };
      updatedAt?: string;
      slug?: string;
      tags: string[];
    }[];

    const type = (sectionData?.post_select_filter_option?.value ??
      "auto") as PostDataSection["type"];
    const postData = {
      sectionTitle: sectionData?.category?.value ?? "",
      titleHref: `${postSlug ?? ""}/${sectionData?.tags?.value ?? ""}`,
      tags: sectionData?.tags?.value ?? "",
      maxDisplayed: Number(sectionData?.max_displayed?.value) || 10,
      type,
      sortBy: sectionData?.sort_by?.value as PostDataSection["sortBy"],
      posts:
        postList?.map((item) => ({
          title: item.title,
          subTitle: item.summary || "",
          mediaUrl: item.featuredImage?.src || "",
          writeDate: item.updatedAt || "",
          link: `${postSlug ?? ""}/${sectionData?.tags?.value || ""}/${item.slug}`,
        })) || null,
    };
    return postData;
  } catch {
    return {
      sectionTitle: "",
      titleHref: "",
      tags: "",
      maxDisplayed: 0,
      type: "auto",
      posts: [],
    };
  }
};

export const getTextAndImageData = (list: PageSection[], key: string) => {
  try {
    const section = getSectionByKey(list, key);
    const sectionData = section?.psaValueExpected as unknown as TextImagePSA;

    // GET TEXT
    const textValue = sectionData?.text?.valueObject?.content;
    const textDisplay = sectionData?.text?.valueObject?.display;
    const text = textDisplay ? textValue : "";

    // GET IMAGE
    const image = sectionData?.image?.value || "";

    // GET BUTTON
    const buttonTitle = sectionData?.button?.valueObject?.title;
    const buttonPageId = sectionData?.button?.valueObject?.pageId;
    const buttonDisplay = sectionData?.button?.valueObject?.display;

    return {
      sectionTitle: section?.title,
      text,
      image,
      buttonTitle: buttonDisplay ? buttonTitle : "",
      buttonPageId: buttonPageId,
    };
  } catch {
    return {
      sectionTitle: "",
      text: "",
      image: "",
      buttonTitle: "",
      buttonPageId: "",
    };
  }
};

export const getCarouselData = (list: PageSection[], key: string) => {
  try {
    const section = getSectionByKey(list, key);
    const rawList = section?.psaValueExpected?.item?.valueObject as Record<
      string,
      string
    >[];
    const autoNext = section?.psaValueExpected.auto_next?.value === "true";
    const items =
      rawList?.map(({ text_2, text_1, text_3, image }) => ({
        title: text_1,
        content: text_2,
        link: text_3,
        url: image,
      })) || [];
    return {
      sectionTitle: section?.title,
      autoNext,
      items,
    };
  } catch {
    return {
      sectionTitle: "",
      autoNext: false,
      items: [],
    };
  }
};

export const getProductData = (
  list: PageSection[],
  key: string,
  extra?: { productSlug?: string },
): ProductSectionData => {
  try {
    const { productSlug = SLUG_PRODUCT_DEFAULT } = extra || {};

    const productSection = getSectionByKey(list, key);
    const sectionData = productSection?.psaValueExpected;
    const productList =
      sectionData?.product_list as unknown as ProductSectionListItem;
    const category = sectionData?.category as unknown as BaseCategory;

    const productData = {
      sectionTitle: sectionData?.title.value ?? "",
      titleHref: compact([productSlug, category.slug]).join("/"),
      category: sectionData?.category,
      items: productList?.map((item) => {
        const isSale = item.onSale ? true : false;
        return {
          id: item.id,
          name: item.name,
          cost: item.cost,
          originPrice: item.price,
          finalPrice: item.lastPrice,
          discount: isSale ? item.discount : null,
          medias: item.medias || [],
          categories: item.categories,
          href: compact([
            productSlug,
            item.categories?.[0].slug || category.slug,
            item.slug,
          ]).join("/"),
          sku: item.sku,
          description: item.description,
          status: item.status,
        };
      }),
    };

    return productData;
  } catch {
    return {
      sectionTitle: "",
      titleHref: "",
      items: [],
    };
  }
};

export const getMapData = (list: PageSection[], key: string) => {
  try {
    const section = getSectionByKey(list, key);
    const sectionData = section?.psaValueExpected;
    const mapIframe = sectionData?.map_ifr?.value;
    return {
      sectionTitle: section?.title,
      mapIframe,
    };
  } catch {
    return {
      sectionTitle: "",
      mapIframe: "",
    };
  }
};
