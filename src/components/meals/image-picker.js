"use client"

import {useRef, useState} from "react";
import styles from "./image-picker.module.css"
import Image from  "next/image"


export default function ImagePicker(){
    const [pickedImage, setPickedImage] = useState()
    const imageInput = useRef();

    function handlePickClick() {
        // console.log("clicked file input")
        imageInput.current.click()
    }
    function handleImageChange(event){
        // console.log("Picked image change");
        const file = event.target.files[0]; // pick

        if (!file){
            setPickedImage(null)
            return
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }

        fileReader.readAsDataURL(file)
    }

    return (
        <div className={styles.picker}>
            <label htmlFor="image">Image</label>
            <div className={styles.controls}>
                <div className={styles.preview}>
                    {!pickedImage && <p>No Image Picked Yet</p>}
                    {pickedImage && (
                        <Image src={pickedImage} alt="image picked image" fill/>
                    )}
                </div>
                <input
                    className={styles.input}
                    type="file"
                    accept="image/png, image/jpg"
                    id="image"
                    name="image"
                    ref={imageInput}
                    onchange={handleImageChange}
                    required
                />
                <button
                    className={styles.button}
                    type="button"
                    onClick={handlePickClick}
                >
                    Pick an Image
                </button>
            </div>
        </div>
    )
}