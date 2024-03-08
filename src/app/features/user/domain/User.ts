import {StaticImageData} from "next/image";

export interface User {
    username: string,
    sex?: 'M' | 'F' | undefined,
    address?: string,
    name: string,
    email: string,
    birthday: string
    image: StaticImageData | undefined
}
