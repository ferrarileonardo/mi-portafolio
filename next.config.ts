import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    position: "bottom-right", // opciones: "top-left", "top-right", "bottom-left", "bottom-right"
  },
};
console.log("NEXT_DISABLE_DEVTOOLS:", process.env.NEXT_DISABLE_DEVTOOLS);

export default nextConfig;
