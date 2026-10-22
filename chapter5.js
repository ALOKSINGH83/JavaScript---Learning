let post = {
    username: "@aloksingh",
    content: "This is my #firstpost",
    likes: 935,
    reposts: 45,
    tags: ["@aitd", "@apnacollege"],
};

console.log(post);

//GET Value
console.log(post.reposts);
console.log(post["likes"]);
console.log(post["username"]);
console.log(post.tags);