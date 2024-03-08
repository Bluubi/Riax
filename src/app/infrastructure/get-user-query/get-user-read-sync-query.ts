import {User} from "@/app/features/user/domain/User";
import image from '../../../../public/profiles/pampas-grass-6283622_640.jpg'

export const GetUserReadSyncQuery = {
    execute: (): User => {
        return {
            username: 'Bluubi',
            name: 'Lidia Sánchez',
            email: 'lidiasd91@gmail.com',
            birthday: '28/01/1991',
            image
        }
    }
}
