import {User} from "@/app/features/user/domain/User";
import {StaticImageData} from "next/image";

export interface UserProfile extends User {
    image: StaticImageData | undefined,
    background: StaticImageData | undefined,
}
