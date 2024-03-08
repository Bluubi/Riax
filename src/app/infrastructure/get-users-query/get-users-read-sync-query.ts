import {User} from "@/app/features/user/domain/User";

const GetUsersReadSyncQuery = {
        execute: (): Array<User> => [{
            username: 'Shirvana',
            name: 'Nirvana',
            email: 'nshirvana76@gmail.com',
            birthday: 'Shirakov',
            image: undefined
        }]
}
