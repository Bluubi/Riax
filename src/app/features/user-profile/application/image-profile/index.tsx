import Image, {StaticImageData} from "next/image";
import {MdAddAPhoto} from "react-icons/md";


export type ImageProfileProps = {
    image: StaticImageData | undefined;
    dispatchEvent: () => void;
}
export const ImageProfile = ({image, dispatchEvent}: ImageProfileProps) => {
    function handleOnClick(){
        dispatchEvent();
    }

    return  <>{
        image && <Image src={image} alt={"Profile image"} className={'w-28 h-28 rounded-full object-cover border-2 border-white hover:cursor-pointer'} />
         }
        <div className={'w-28 h-28 rounded-full bg-black absolute top-[0vw] hover:cursor-pointer opacity-0 hover:opacity-25 transition-opacity duration-200 ease-in-out'} onClick={handleOnClick}>
            <MdAddAPhoto fill={'white'} className={'absolute z-50 h-20 w-20 left-[1vw] top-[1vw]'} onClick={handleOnClick}/>
        </div>

    </>
}

