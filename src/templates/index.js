import hello_text from "./hello";
import loader from "./loader";
import posts from "./posts";

export default {
  hello_text,
  loader,
  all_posts: posts.all_posts,
  recent_posts: posts.recent_posts
};
