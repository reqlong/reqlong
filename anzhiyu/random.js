var posts=["posts/16107.html","posts/44097.html","posts/14743.html","posts/37773.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };