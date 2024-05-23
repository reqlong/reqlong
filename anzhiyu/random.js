var posts=["posts/16107/","posts/14743/","posts/37773/","posts/44097/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };