import utils from "../utils/utils";

export default function(data, params) {
  var api_stub = "posts/index.json";

  utils().request(api_stub, "show_all_posts", "show_all_posts_error");
}
