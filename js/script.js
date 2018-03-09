var imageContainer = document.getElementById("imageContainer");
var images = ["bg.jpg", "bg2.jpg", "bg3.png"];
var totalPics = images.length;
var currentImage = 0;


function changeImage() {
        var imageSource = "resources/" + images[currentImage];
        currentImage = (currentImage + 1) == totalPics ? 0 : currentImage + 1;
        imageContainer.innerHTML = '<img src=" ' + imageSource + ' " width="555" height="325"/> ';

        setTimeout(changeImage, 2000);

}

changeImage();
