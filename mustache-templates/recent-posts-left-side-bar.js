// import firebase from "../node_modules/firebase";
// var firebase = require('../node_modules/firebase');


// // Initialize Firebase

// var config = {
//     apiKey: "AIzaSyD3OrO0qJTr9sMp1YlUCFj1QwEVi7r_DEE",
//     authDomain: "suddenlysimablog.firebaseapp.com",
//     databaseURL: "https://suddenlysimablog.firebaseio.com/",
//     storageBucket: "gs://suddenlysimablog.appspot.com",
//   };
//   firebase.initializeApp(config);
  
//   console.log(firebase.database());

var view = {
    firstPost: {
        title: "First Post Title Example",
        date: "September 23rd 2018"
    },
    secondPost: {
        title: "Second Post Title Example",
        date: "September 22nd 2018"
    },
    thirdPost: {
        title: "Third Post Title Example",
        date: "September 3rd 2018"
    }
};

var Otherview = {
    firstPost: {
        title: "First Post Title Example",
        date: "September 23rd 2018"
    },
    secondPost: {
        title: "Second Post Title Example",
        date: "September 22nd 2018"
    },
    thirdPost: {
        title: "Third Post Title Example",
        date: "September 3rd 2018"
    }
};

function loadRecentPostsLeftSideBar() {
    var output = Mustache.render(
        '<div class="sidebar-widget"><h6 class="mt-40 mb-20">Recent Posts </h6><div class="recent-post clearfix"><div class="recent-post-image"><img class="img-fluid" src="images/blog/01.jpg" alt="">          </div>          <div class="recent-post-info">            <a href="#">{{firstPost.title}}</a>            <span>              <i class="fa fa-calendar-o"></i> {{firstPost.date}}</span>          </div>        </div>        <div class="recent-post clearfix">          <div class="recent-post-image">            <img class="img-fluid" src="images/blog/02.jpg" alt="">          </div>          <div class="recent-post-info">            <a href="#">{{secondPost.title}}</a>            <span>              <i class="fa fa-calendar-o"></i> {{secondPost.date}}</span>          </div>        </div>        <div class="recent-post clearfix">          <div class="recent-post-image">            <img class="img-fluid" src="images/blog/03.jpg" alt="">          </div>          <div class="recent-post-info">            <a href="#">{{thirdPost.title}}</a>            <span>              <i class="fa fa-calendar-o"></i> {{thirdPost.date}}</span>          </div>        </div>      </div>',
        view
    );
    document.getElementById('recent-posts').innerHTML = output;
}

function gatherView() {

    var output = Mustache.render(
        '{{firstPost.title}} --- {{firstPost.date}} <p> {{secondPost.title}} --- {{secondPost.date}} <p> {{thirdPost.title}} --- {{thirdPost.date}}',
        view
    );
    console.log("View Inside of GatherView Function" + JSON.stringify(view));
    document.getElementById('current-view').innerHTML = output;

}

function updateValues(title, date) {
    if (!(title || date)) {
        view.firstPost.title = "First Post Title Example";
        view.firstPost.date = "Default Date Here";
    }
    else {
        var postArray = [view.firstPost, view.secondPost, view.thirdPost];
        var firstPost = view.firstPost;
        var secondPost = view.secondPost;
        var thirdPost = view.thirdPost;
        postArray.push(firstPost,secondPost,thirdPost);
        postArray[0].title = title;
        postArray[0].date = date;
        postArray[1].title = Otherview.firstPost.title;
        postArray[1].date = Otherview.firstPost.date;
        postArray[2].title = Otherview.secondPost.title;
        postArray[2].date = Otherview.secondPost.date;

        Otherview.firstPost.title = title;
        Otherview.firstPost.date = date;
        Otherview.secondPost.title = postArray[1].title;
        Otherview.secondPost.date = postArray[1].date;
        Otherview.thirdPost.title = postArray[2].title;
        Otherview.thirdPost.date = postArray[2].date;
    
    }

    var updatedValuesOutput = Mustache.render(
        '<div id=border-color-green>{{firstPost.title}} --- {{firstPost.date}} <p> {{secondPost.title}} --- {{secondPost.date}} <p> {{thirdPost.title}} --- {{thirdPost.date}}</div>',
        view
    );
    document.getElementById('updated-view').innerHTML = updatedValuesOutput;



}