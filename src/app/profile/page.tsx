'use client'

import {GetUserReadSyncQuery} from "@/app/infrastructure/get-user-query/get-user-read-sync-query";
import Image from "next/image";
import bg1 from '../../../public/profiles/bg1.jpg'
import {ImageProfile} from "@/app/profile/image-profile";
import { FormImageProfile } from "@/app/profile/form-image-profile";
import {useState} from "react";

const Profile = () => {

    const [open, setOpen] = useState<boolean>(false)

    function useGetProfile() {
        return GetUserReadSyncQuery.execute();
    }

    function handleOpenCloseModal(){
        setOpen(!open);
    }

    const user = useGetProfile();

    return (
        <div>
            <Image src={bg1} alt={''} className={'w-lvw object-fit h-72 object-cover'} />
            <div className={'flex justify-center flex-col absolute top-[15vw] ml-3.5'}>
                <ImageProfile image={user.image} dispatchEvent={handleOpenCloseModal} />
                <h2 className={'text-2xl font-bold'}>@{ useGetProfile()?.username} </h2>
                <p>{ useGetProfile().name }</p><p> { useGetProfile().sex }</p>
            </div>
            <p>{ useGetProfile().address }</p>
            <FormImageProfile image={user.image} dispatchForm={open} dispatchEvent={handleOpenCloseModal} />
        </div>
    )
}

export default Profile;
