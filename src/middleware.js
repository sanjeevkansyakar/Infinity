export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/write", "/write/:path*", "/personal-blog"],
};
