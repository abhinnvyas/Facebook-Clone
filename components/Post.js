import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

function Post({ name, message, email, timestamp, image, postImage }) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt=""
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>

        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="h-56 md:h-96 bg-white">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/facebook-clone-abhinn.appspot.com/o/posts%2FlFH1NN8tAC0aLJW4EL9u?alt=media&token=818e1c89-ed30-4501-b5b1-e982d87a65c6"
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}

      <div
        className="flex justify-between items-center rounded-b-2xl bg-white shadow-md
      text-gray-400 border-t"
      >
        <div>
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Post;
