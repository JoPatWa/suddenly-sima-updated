var view = {
    firstPost: {
        title: "DIY Manicure",
        date: "January 8th 2018",
        image: "./images/ss/main_diy_manicure.jpg",
        alt: "do-it-yourself manicure",
        link: "./blog-posts/diy-manicure-post.html"
    },
    secondPost: {
        title: "Six Things To Expect From A New Dog Or Puppy",
        date: "Decemeber 14th 2017",
        image: "./images/ss/puppy-latest-post.jpg",
        alt: "new dog, new puppy",
        link: "./blog-posts/six-things-to-expect-from-a-new-dog-post.html"
    },
    thirdPost: {
        title: "How To Beat The Winter Blues",
        date: "December 6th 2017",
        image: "./images/ss/winter-blues-latest-post.jpg",
        alt: "beat the winter blues",
        link: "./blog-posts/how-to-beat-the-winter-blues-post.html"
    }
};

function loadRecentPostsLeftSideBar() {
    var output = Mustache.render(
        '<div class="sidebar-widget"><h6 class="mt-40 mb-20">Recent Posts </h6><div class="recent-post clearfix"><div class="recent-post-image"><img class="img-fluid" src={{firstPost.image}} alt="{{firstPost.alt}}">          </div>          <div class="recent-post-info">            <a href="{{firstPost.link}}">{{firstPost.title}}</a>            <span>              <i class="fa fa-calendar-o"></i> {{firstPost.date}}</span>          </div>        </div>        <div class="recent-post clearfix">          <div class="recent-post-image">            <img class="img-fluid" src={{secondPost.image}} alt="{{secondPost.alt}}">          </div>          <div class="recent-post-info">            <a href="{{secondPost.link}}">{{secondPost.title}}</a>            <span>              <i class="fa fa-calendar-o"></i> {{secondPost.date}}</span>          </div>        </div>        <div class="recent-post clearfix">          <div class="recent-post-image">            <img class="img-fluid" src={{thirdPost.image}} alt="{{thirdPost.alt}}">          </div>          <div class="recent-post-info">            <a href="{{thirdPost.link}}">{{thirdPost.title}}</a>            <span>              <i class="fa fa-calendar-o"></i> {{thirdPost.date}}</span>          </div>        </div>      </div>',
        view
    );
    document.getElementById('recent-posts').innerHTML = output;
}

