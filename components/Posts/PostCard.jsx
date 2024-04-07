import { cutText } from "../../helpers/cutText";
import s from "./Posts.module.css";

const PostCard = ({ post }) => {
  //   const { title = "Default title", body = "Default body" } = post;
  return (
    <li>
      <h2>{"title"}</h2>
      <p>{"body"}</p>
    </li>
  );
};

export default PostCard;
