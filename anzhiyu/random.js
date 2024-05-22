var posts=["2024/05/20/cs/","2024/05/20/hello-world/","2024/05/22/测试文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };