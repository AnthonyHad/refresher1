import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";

function PostsLists() {
  return (
    <>
      <NewPost />
      <ul className={styles.posts}>
        <Post author="Anthony" body="Hello World" />
        <Post author="Maximilian" body="Hola Mundo!" />
      </ul>
    </>
  );
}

export default PostsLists;
