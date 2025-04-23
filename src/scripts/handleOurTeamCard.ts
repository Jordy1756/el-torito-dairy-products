import type { Images } from "@definitions/sharedTypes";

// import staffImage1 from "@images/team/staff1.webp";
// import staffImage2 from "@images/team/staff2.webp";
// import staffImage3 from "@images/team/staff3.webp";
// import staffImage4 from "@images/team/staff4.webp";
// import staffImage5 from "@images/team/staff5.webp";
import notImage from "@images/team/noImage.webp";

const images: Images = {
    // staff1: staffImage1,
    // staff2: staffImage2,
    // staff3: staffImage3,
    // staff4: staffImage4,
    // staff5: staffImage5,
    notImage,
};

export const getStaffImage = (staffId: string): ImageMetadata => images[staffId];
