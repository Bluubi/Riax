import {Message} from "@/app/features/message/domain/Message";

export interface User {
    username: string,
    sex?: 'M' | 'F' | undefined,
    address?: string,
    name: string,
    email: string,
    birthday: string
    messages: Message[]
}
