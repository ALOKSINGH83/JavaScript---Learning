let smallImg = document.getElementsByClassName("oldImg");

for(let i=0;i<smallImg.length;i++){
    smallImg[i].src = "assetsch9/spiderman_img.png";
    console.log(`value of old image ${i} is changed`);
};