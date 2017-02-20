$(function() {

  var container = document.createElement("div");
  container.className = "container";
  document.body.appendChild(container);
  var $blogDate = $("<p>");
  var $postThumbnail = $("<img>");
  $.get("https://www.reddit.com/r/funny.json").done(function(responseBody){
    responseBody.data.children.forEach(function(blog){
    var blogSection = document.createElement("section");
    blogSection.className = "blog";
    blogSection.style = "background-color: #fff; border: 1px solid grey; padding: 5px; margin: 10px; font-family: monospace";
    container.append(blogSection);

    var thumbDiv=document.createElement("div");
    thumbDiv.className="thumbDiv";
    var blogThumbnail = document.createElement("img");
    blogThumbnail.className = "thumbnail";
    blogThumbnail.src = blog.data.thumbnail;
    thumbDiv.append(blogThumbnail);
    blogSection.append(thumbDiv);

    var contentDiv=document.createElement("div");
    contentDiv.className="contentDiv";
    var p1=document.createElement("p");
    var a=document.createElement("a");
    a.className="titleUrl";
    a.textContent=blog.data.title;
    a.href = blog.data.url;
    p1.append(a);
    contentDiv.append(p1);

    var p2=document.createElement("p");
    var blogDate = blog.data.created;
    myDate = new Date(1000*blogDate);
    p2.textContent= "Posted " + myDate.getHours() + " Hours Ago by " + blog.data.author;
    contentDiv.append(p2);

    var p3=document.createElement("p");
    p3.textContent=blog.data.num_comments+" comments";
    contentDiv.append(p3);
    blogSection.append(contentDiv);

    });

  });

});
