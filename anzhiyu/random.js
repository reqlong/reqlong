var posts=["posts/37773/","posts/16107/","posts/44097/","posts/14743/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };