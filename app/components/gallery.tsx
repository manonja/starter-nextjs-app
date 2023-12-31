import {ImageGallery} from "./imageGallery";
import {FC} from "react";
import {ImageType} from "../types";

interface GalleryProps {
    images: ImageType[]
}

export const Gallery:FC<GalleryProps> = ({images}) => {
    return (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {images.map((image, i) => (
                    <ImageGallery key={`${image.src}-${i}`} image={image} />
                ))}
            </div>
        </div>
    );
}
