// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.
import playmobilHtml from "./html/playmobil";

const posts = [
  {
    title: "Don't Settle for Playmobil",
    slug: "playmobil",
    html: playmobilHtml
  }
];

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
