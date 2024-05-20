var posts=["2024/05/20/hello-world/","2024/05/20/iperf打流使用方法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };