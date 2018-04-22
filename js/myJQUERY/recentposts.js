var query = require("../sql/queries.js")
var postsObject = query.selectBlogPosts();
function recentPosts() {
   
    return $(".recent-post-info").append("<a href='#'>" + postsObject[0].title + "</a>")
}
    