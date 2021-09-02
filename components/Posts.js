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

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      }
    );
  }, []);

  return (
    <div>
      {posts.map((post, id) => (
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
