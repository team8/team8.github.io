$(document).
    ajaxStart(function () {
	$loading.show();
    }).
    ajaxStop(function () {
	$loading.hide();
    });

var $loading = $("div.preloader");

window.postList = [];
window.loadedPosts = false;

var showPost = function showPostF (id) {
    var singlePost = $("div.news-items .news-item-"+id);

    $("ul.news-list").hide();
    $("div.news-nav").show();
    singlePost.show();

    $("a.nav-el").click(function () {
	singlePost.hide();
	$("ul.news-list").show();
	routie('');
    });
};

var SinglePost = function SinglePostF (id) {
    if (loadedPosts) {
	showPost(id);
    }
    else {
	loadPostList();
	setTimeout(function () { SinglePost(id); }, 500);
    }
};

var writePostList = function writePostListF (data) {
    var newsList = $("ul.news-list");
    var postDivs = $("div.news-items");

    newsList.hide();

    data.map(function loadItemF (val, ind) {
	var listItem = $("<li/>", {
	    class: "list-item"
	});
	
	var listLink = $("<a/>", {
	    class: "item-link",
	    href: "#post/"+val.id,
	    text: val.title,
	}).appendTo(listItem);
	
	listItem.appendTo(newsList);

	var postDiv = $("<div/>", {
	    class: "news-item-"+val.id,
	    style: "display: none;"
	});

	var postTitle = $("<h3/>", {
	    class: "item-title",
	    text: val.title
	}).appendTo(postDiv);

	var postBody = $("<div/>", {
	    class: "item-body",
	    text: val.body
	}).appendTo(postDiv);

	postDiv.appendTo(postDivs);
    });
};

var showPostList = function showPostListF () {
    $("div.news-nav").hide();
    $("div.news-items .news-item-*").hide();
    $("ul.news-list").show();
};

var loadPostList = function loadPostListF () {
    $.getJSON("http://news.palyrobotics.com/feed").
	success(function (data) {
	    loadedPosts = true;
	    writePostList(data);
	}).
	fail(function (err) {
	    $("<div/>", {
		text: "Oops! Looks like something went wrong. Maybe you should try refreshing the page."
	    }).appendTo($("#news-container"));
	});
};

var PostList = function PostListF () {
    if (loadedPosts) showPostList();
    else {
	loadPostList();
	setTimeout(PostList, 500);
    }
};

routie({
    '': PostList,
    'post/:id': SinglePost
});
