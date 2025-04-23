import type { Images } from "@definitions/sharedTypes";

import productImage1 from "@images/products/NatillaCasera.webp";
import productImage2 from "@images/products/QuesoMaduro.webp";
import productImage3 from "@images/products/QuesoPalmito.webp";
import productImage4 from "@images/products/YogurtGuananbana.webp";
import productImage5 from "@images/products/QuesoMaduroChile.webp";
import productImage6 from "@images/products/YogurtKiwi.webp";
import productImage7 from "@images/products/YogurtMora.webp";

const images: Images = {
    product1: productImage1,
    product2: productImage2,
    product3: productImage3,
    product4: productImage4,
    product5: productImage5,
    product6: productImage6,
    product7: productImage7,
};

export const getProductImage = (productId: string): ImageMetadata => images[productId];
