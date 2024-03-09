import {User} from "@/app/features/user/domain/User";
import image from '../../../../public/profiles/pampas-grass-6283622_640.jpg'
import background from '../../../../public/profiles/bg1.jpg';
import {UserProfile} from "@/app/features/user-profile/domain/User-profile";

export const GetUserProfileReadSyncQuery = {
    execute: (): UserProfile => {
        return {
            username: 'Bluubi',
            name: 'Lidia Sánchez',
            email: 'lidiasd91@gmail.com',
            birthday: '28/01/1991',
            image,
            background,
            messages: [
                { content: 'Hello world!', date: new Date()},
                { content: 'Hello Riax!', date: new Date()},
            ]
        }
    }
}
