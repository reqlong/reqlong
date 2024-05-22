var posts=["2024/05/20/cs/","2024/05/20/hello-world/","2024/05/22/测试文章/","2024/05/22/部署Harbor私有镜像仓库/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };