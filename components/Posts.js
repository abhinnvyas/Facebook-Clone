import {
  collection,
  query,
  onSnapshot,
  where,
  orderBy,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

function Posts({ posts }) {
  const [realtimePosts, setRealtimePosts] = useState(null);
  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setRealtimePosts(snapshot.docs.map((doc) => doc.data()));
      }
    );
  }, []);

  return (
    <div>
      {realtimePosts
        ? realtimePosts.map((post, id) => (
            <Post
              key={id}
              name={post.name}
              message={post.message}
              email={post.email}
              timestamp={post.timestamp}
              image={post.image}
              postImage={post.postImage}
            />
          ))
        : posts.map((post, id) => (
            <Post
              key={id}
              name={post.name}
              message={post.message}
              email={post.email}
              timestamp={post.timestamp}
              image={post.image}
              postImage={post.postImage}
            />
          ))}
    </div>
  );
}

export default Posts;
