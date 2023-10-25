import { Avatar } from "@/components";
import { CameraIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";

export function ImageUploader() {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined,
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <div className="App">
      <ImageUploading value={images} onChange={onChange} maxNumber={maxNumber}>
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper relative mt-2 flex h-[4rem] w-[4rem] items-center justify-center shadow-sm ">
            {imageList.length < 1 && (
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
                className="flex h-[4rem] w-[4rem] items-center justify-center"
              >
                <CameraIcon className="h-6 w-6" />
              </button>
            )}
            &nbsp;
            {imageList.map((image, index) => (
              <div
                key={index}
                className="image-item absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center"
              >
                <Avatar imageUrl={image.dataURL} alt="" size="medium" />

                <button
                  onClick={() => onImageUpdate(index)}
                  className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-primary-500 text-light"
                >
                  <CameraIcon className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
