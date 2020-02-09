// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.
import mddHtml from "./html/magic-driven-development";

const posts = [
  {
    title: "Magic-Driven Development",
    slug: "magic-driven-development",
    html: mddHtml
  }
];

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
