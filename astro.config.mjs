// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import node from "@astrojs/node";

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
    adapter: node({
        mode: "standalone",
    }),
    output: "server",
});
