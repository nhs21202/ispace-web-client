import { getPageSectionBySlug } from "@/api/pageSection/sever";
import VisualData from "@/components/VisualData";
import { HEADER_SLUG_KEY } from "@/utilities/constant";
import { headers } from "next/headers";
import React from "react";

/**
 * TODO [config]: List all key use in admin section each page here
 *  -- Section key
 *  -- Form key
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
enum KEYS {
  KEY_1 = "KEY_1",
  KEY_2 = "KEY_2",
  KEY_3 = "...",
}

const AboutPage = async () => {
  /**
   * TODO [page]: get page info for server side
   *
   * 1. get Slug from cookies header
   * const slug = headers().get(HEADER_SLUG_KEY);
   *
   * 2. get page section by slug
   * const list = await getPageSectionBySlug(slug);
   *
   * 3. get post page slug if need to redirect to post (optional)
   * const postPageInfo = await getPageByKey(PAGE_KEY.POST);
   *
   * 4. get product page slug if need to redirect to product (optional)
   * const productPageInfo = await getPageByKey(PAGE_KEY.PRODUCT);
   *
   */

  /**
   * TODO [page]: Convert section data to page data if needed
   *
   * - textAndImage: getTextAndImageData(list, sectionKey);
   *    + list: (step 2)
   *    + sectionKey: get pageSection from Admin
   *
   * - carousel: getCarouselData(list, sectionKey)
   *    + list: (step 2)
   *    + sectionKey: get pageSection from Admin
   *
   * - postList: getPostData(list, sectionKey, extra)
   *    + list: (step 2)
   *    + sectionKey: get pageSection from Admin
   *    + extra: { postSlug?: string }
   *
   * - productList: getProductData(list, sectionKey, extra)
   *    + list: (step 2)
   *    + sectionKey: get pageSection from Admin
   *    + extra: { productSlug?: string }
   *
   * - map: getMapData(list, sectionKey)
   *    + list: (step 2)
   *    + sectionKey: get pageSection from Admin
   *
   * - form: getFormByKey(formKey)
   *    + formKey: get from Admin
   *    + extract each field from form: getFieldByType | getFieldByKey
   */

  const slug = headers().get(HEADER_SLUG_KEY) || "about";
  const list = await getPageSectionBySlug(slug);
  return (
    <div>
      <div className="flex w-screen items-center justify-center">
        About Page content
      </div>

      <VisualData list={list} />
    </div>
  );
};

export default AboutPage;
