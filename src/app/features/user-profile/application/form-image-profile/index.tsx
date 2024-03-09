import {ImageProfileProps} from "../image-profile";
import Image from "next/image";
import {IoMdClose} from "react-icons/io";

type FormImageProfile = ImageProfileProps & {
    dispatchForm: boolean;
}

export const FormImageProfile = ({image, dispatchForm, dispatchEvent}: FormImageProfile) => {

    return (
        <div className={`fixed flex flex-col justify-center items-center bg-black bg-opacity-50 inset-0 ${dispatchForm ? 'visible' : 'invisible'}`} onClick={() => dispatchEvent()}>
            <IoMdClose className={'absolute top-0 right-0 m-4'} fill={'white'} onClick={() => dispatchEvent()}/>
            <div>
                {image && <Image src={image} alt={'Profile image'}/>}
            </div>
                 <button className={'bg-gray-800 text-cyan-50 p-2 w-1/5 mt-2 rounded-sm'} data-testid={'button-form'}> Update image </button>
        </div>

)
}
