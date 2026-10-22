let post = {
    username: "@aloksingh",
    content: "This is my #firstpost",
    likes: 935,
    reposts: 45,
    tags: ["@aitd", "@apnacollege"],
};

console.log(post);

//ADD / Update Value
post.content = "One of the best things to do in world.";
post.comment = "Congratulations!!";
delete post.reposts;

console.log(post);