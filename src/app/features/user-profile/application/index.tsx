'use client'

import Image from "next/image";
import bg1 from "../../../../../public/profiles/bg1.jpg";
import {ImageProfile} from "@/app/features/user-profile/application/image-profile";
import {FormImageProfile} from "@/app/features/user-profile/application/form-image-profile";
import {useState} from "react";
import {GetUserProfileReadSyncQuery} from "@/app/infrastructure/get-user-query/get-user-read-sync-query";

export const UserProfile = () => {
    const [open, setOpen] = useState<boolean>(false)

    function useGetProfile() {
        return GetUserProfileReadSyncQuery.execute();
    }

    function handleOpenCloseModal(){
        setOpen(!open);
    }

    const user = useGetProfile();


    return (
    <div className={'relative'}>
        <Image src={bg1} alt={''} className={'w-lvw object-fit h-72 object-cover hover:cursor-pointer'} />
        <div className={'flex justify-center flex-col absolute top-56 ml-3.5'}>
            <ImageProfile image={user.image} dispatchEvent={handleOpenCloseModal} />
            <h2 className={'text-2xl font-bold'}>@{ useGetProfile()?.username} </h2>
            <p>{ useGetProfile().name }</p><p> { useGetProfile().sex }</p>
        </div>
        <p>{ useGetProfile().address }</p>
        <FormImageProfile image={user.image} dispatchForm={open} dispatchEvent={handleOpenCloseModal} />
    </div>
    )


}
