const recent_posts = function(data) {
  var content = `
        <div id="recent_posts" class="">
            <h2>Recent Posts</h2>
    `;
  for (var i = 0; i < 1; i++) {
    var post = data[i];
    content = content +
      `
            <h3><a href="` +
      post.link +
      `">` +
      post.title +
      `</a></h3>
            <i class="post_date">posted on ` +
      post.published_on +
      `</i><br>
            <p>` +
      post.snippet +
      `</p>
        `;
  }
  content = content + "</div>";

  return content;
};

const all_posts = function(data) {
  var content = `
        <div id="all_posts" class="">
            <h2>All Posts</h2>
    `;
  const no_of_posts = data.length;
  for (var i = 0; i < no_of_posts; i++) {
    var post = data[i];
    content = content +
      `
            <h3><a href="` +
      post.link +
      `">` +
      post.title +
      `</a></h3>
            <i>posted on ` +
      post.published_on +
      `</i><br>
            <i>tags: ` +
      post.tags +
      `</i>
            <br><br>
        `;
  }
  content = content + "</div>";

  return content;
};
export default {
  all_posts,
  recent_posts
};
