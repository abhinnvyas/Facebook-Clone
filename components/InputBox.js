import { useSession } from "next-auth/client";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db } from "../firebase";
import firebase from "firebase/app";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function InputBox() {
  const [session] = useSession();
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    addDoc(collection(db, "posts"), {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: serverTimestamp(),
    });

    // db.collection("posts").add({
    //   message: inputRef.current.value,
    //   name: session.user.name,
    //   email: session.user.email,
    //   image: session.user.image,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // });

    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    e.preventDefault();
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div
      className="bg-white p-2 rounded-2xl shadow-md
    text-gray-500 font-medium mt-6"
    >
      <div className="flex items-center space-x-4 p-4">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1" action="">
          <input
            className="rounded-full h-12 bg-gray-100 
            flex-grow px-5 outline-none"
            type="text"
            ref={inputRef}
            placeholder={`What's on your mind, ${session.user.name}?`}
          />
          <button hidden onClick={sendPost} type="submit"></button>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col items-center cursor-pointer 
            filter hover:brightness-110 transition duration-150 transform hover:scale-105 ease-out"
          >
            <img className="h-10 object-contain" src={imageToPost} alt="" />
            <p className="text-sm text-red-500">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div
          onClick={() => {
            filepickerRef.current.click();
          }}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={filepickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
