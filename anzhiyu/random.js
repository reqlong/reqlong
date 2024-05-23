var posts=["/16107/","/37773/","/14743/","/44097/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };