var exports = module.exports = {};
mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "suddenly_sima_blog"
});

function selectBlogPosts() {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
    con.query("SELECT * FROM blog_posts ORDER BY 'date_posted' ASC", function (err, result, fields) {
        if (err) throw err;
        return result;
    })
    con.end()
}


function selectBlogPosts() {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
    con.query("SELECT * FROM blog_posts ORDER BY 'date_posted' ASC", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    })
    con.end()
};

