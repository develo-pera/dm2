import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
};

const withNextIntl = createNextIntlPlugin({
  experimental: {
    messages: {
      // Relative path to the directory
      path: "./messages",

      // Automatically detects locales based on `path`
      locales: ["sr", "en"],

      // Either 'json', 'po', or a custom format
      format: "json"
    }
  }
});
export default withNextIntl(nextConfig);
