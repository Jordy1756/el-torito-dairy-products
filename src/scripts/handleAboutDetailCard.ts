import type { Images } from "@definitions/sharedTypes";
import historyImage from "@images/company/history.webp";
import MissionImage from "@images/company/mission.webp";
import VisionImage from "@images/company/vision.webp";
import ValuesImage from "@images/company/values.webp";

const images: Images = {
    history: historyImage,
    mission: MissionImage,
    vision: VisionImage,
    values: ValuesImage,
};

export const getIdentityImage = (identityId: string): ImageMetadata => images[identityId];
