import type { OptimizedImages } from "@definitions/sharedTypes";
import backgroundImage1 from "@images/company/bannerImg01.webp";
import backgroundImage2 from "@images/company/bannerImg02.webp";
import backgroundImage3 from "@images/company/bannerImg03.webp";
import backgroundImage4 from "@images/company/bannerImg04.webp";
import backgroundImage5 from "@images/company/bannerImg05.webp";
import { getImage } from "astro:assets";

const optimizeImage = async (src: ImageMetadata) => await getImage({ src, format: "webp" });

const banner1 = await optimizeImage(backgroundImage1);
const banner2 = await optimizeImage(backgroundImage2);
const banner3 = await optimizeImage(backgroundImage3);
const banner4 = await optimizeImage(backgroundImage4);
const banner5 = await optimizeImage(backgroundImage5);

const bannerImages: OptimizedImages = {
    banner01: banner1.src,
    banner02: banner2.src,
    banner03: banner3.src,
    banner04: banner4.src,
    banner05: banner5.src,
};

const bannerNotFoundImages: OptimizedImages = {
    notFoundBanner01: banner4.src,
};

export const getBannerImage = (bannerId: string) => bannerImages[bannerId];
export const getNotFoundBannerImage = (bannerId: string) => bannerNotFoundImages[bannerId];
