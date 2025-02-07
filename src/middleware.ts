import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getPageByKey, getPageByPath } from "@/api/clientPages/sever";
import {
  getFolderNameByPageKey,
  HEADER_SLUG_KEY,
  PAGE_KEY,
  PAGE_KEY_HOME,
  PAGE_KEY_POST,
  PAGE_KEY_PRODUCT,
  SLUG_POST_DEFAULT,
  SLUG_PRODUCT_DEFAULT,
} from "./utilities/constant";

const convertHomeUrl = async (req: NextRequest) => {
  const pageInfo = await getPageByKey(PAGE_KEY_HOME);
  if (!pageInfo) return {};

  const headers = new Headers(req.headers);
  headers.set(HEADER_SLUG_KEY, pageInfo.slug);
  const url = req.nextUrl.clone();
  url.pathname = `/home`;
  return { url, headers };
};

const convertStaticUrl = async (
  req: NextRequest,
  pageKey: string,
  pageSlug: string,
) => {
  const pageInfo = await getPageByKey(pageKey);
  if (!pageInfo) return {};

  const url = req.nextUrl.clone();
  if (pageInfo?.slug && pageInfo?.slug !== pageSlug) {
    const pattern = new RegExp(`^/${pageSlug}`, "g");
    url.pathname = url.pathname.replace(pattern, "/" + pageInfo?.slug);
    return { url };
  }
  return {};
};

const convertOtherConfigUrl = async (req: NextRequest) => {
  const path = req.nextUrl.pathname;
  const pageInfo = await getPageByPath(path);

  if (!pageInfo) return {};

  const url = req.nextUrl.clone();
  const tag = pageInfo?.tag;
  const slugDetail = pageInfo?.slugDetail;
  const headers = new Headers(req.headers);

  /**
   * POST - page navigation
   * - if (slug) => detail
   * - other => list filter by tag category
   */
  if (pageInfo?.key === PAGE_KEY.POST && tag) {
    url.pathname = [`/${SLUG_POST_DEFAULT}`, tag, slugDetail]
      .filter(Boolean)
      .join("/");
    return { url, headers };
  }

  /**
   * PRODUCT - page navigation
   * - if (slug) => detail
   * - other => list filter by tag category
   */
  if (pageInfo?.key === PAGE_KEY.PRODUCT && tag) {
    url.pathname = [`/${SLUG_PRODUCT_DEFAULT}`, tag, slugDetail]
      .filter(Boolean)
      .join("/");
    return { url, headers };
  }

  /**
   * Navigate to other
   */
  if (pageInfo?.key) {
    url.pathname = `/${getFolderNameByPageKey(pageInfo?.key)}`;
    headers.set(HEADER_SLUG_KEY, pageInfo?.slug || "");
    return { url, headers };
  }
  return { url, headers };
};

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  /**
   * Default path config to home page
   */
  if (path === "/") {
    const { url, headers } = await convertHomeUrl(req);
    if (url) return NextResponse.rewrite(new URL(url), { headers });
  }

  /**
   * Redirect /post to config slug
   */
  if (
    path === `/${SLUG_POST_DEFAULT}` ||
    path.startsWith(`/${SLUG_POST_DEFAULT}/`)
  ) {
    const { url } = await convertStaticUrl(
      req,
      PAGE_KEY_POST,
      SLUG_POST_DEFAULT,
    );
    if (url) return NextResponse.redirect(new URL(url));
  }

  /**
   * Redirect /product to config slug
   */
  if (
    path === `/${SLUG_PRODUCT_DEFAULT}` ||
    path.startsWith(`/${SLUG_PRODUCT_DEFAULT}/`)
  ) {
    const { url } = await convertStaticUrl(
      req,
      PAGE_KEY_PRODUCT,
      SLUG_PRODUCT_DEFAULT,
    );
    if (url) return NextResponse.redirect(new URL(url));
  }

  /**
   * Rewrite to other predefined page to folder page.
   */
  const { url, headers } = await convertOtherConfigUrl(req);

  if (url) return NextResponse.rewrite(new URL(url), { headers });

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|wp-content).*)",
  ],
};
