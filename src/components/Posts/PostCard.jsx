import { cutText } from "../../helpers/cutText";
import s from "./Posts.module.css";
const PostCard = ({ post }) => {
  const { title = "Default title", body = "Default body" } = post;

  return (
    <li className={s.card}>
      <h2>{title}</h2>
      <p>{cutText(body)}</p>
      <div>
        <button>Read more</button>
        <button>Add to favorites</button>
      </div>
    </li>
  );
};

export default PostCard;
