'use client'

import Image from "next/image";
import { useRef, useState } from "react"
import classes from "./image-picker.module.css"
export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState();
    const imageInput = useRef();
    function hanldeClick() {
        imageInput.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();
        
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }
        
        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor="image">{ label }</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet</p>}
                    {pickedImage && (<Image src={pickedImage} fill />)}
                </div>
                <input
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    className={classes.input}
                    ref={imageInput}
                    onChange={handleImageChange}

                ></input>
                <button type="button" className={classes.button} onClick={hanldeClick}> Pick on Image</button>
            </div>
        </div>
    )
}