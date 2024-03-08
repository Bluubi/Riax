import {User} from "@/app/features/user/domain/User";

export interface Query <T> {
    execute: () => T
}
