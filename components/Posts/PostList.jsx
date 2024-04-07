import PostCard from "./PostCard";
import s from "./Posts.module.css";

const PostList = () => {
  return (
    <ul className={s.list}>
      <PostCard />
    </ul>
  );
};

export default PostList;
