import {ImageProfileProps} from "@/app/profile/image-profile";
import Image from "next/image";
import {IoMdClose} from "react-icons/io";

type FormImageProfile = ImageProfileProps & {
    dispatchForm: boolean;
}

export const FormImageProfile = ({image, dispatchForm, dispatchEvent}: FormImageProfile) => {

    return (
             <div className={`absolute flex justify-center items-center bg-black bg-opacity-50 inset-0 ${dispatchForm ? 'invisible' : 'transition visible duration-500 ease in'}`} onClick={() => dispatchEvent()}>
            <IoMdClose className={'absolute top-0 right-0 m-4'} fill={'white'} onClick={() => dispatchEvent()}/>
            <div>
                {image && <Image src={image} alt={'Profile image'}/>}
            </div>
        </div>

)
}
