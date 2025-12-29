// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://lacteos-el-torito.vercel.app",
    experimental: {
        fonts: [
            {
                name: "Poppins",
                cssVariable: "--font-poppins",
                weights: [300, 400],
                styles: ["normal"],
                provider: fontProviders.google(),
                subsets: ["latin"],
            },
        ],
    },
});
