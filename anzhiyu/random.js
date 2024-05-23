var posts=["2024/uncategorized/14743/","2024/uncategorized/16107/","2024/uncategorized/44097/","2024/uncategorized/37773/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };