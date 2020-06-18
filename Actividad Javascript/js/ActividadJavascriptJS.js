var myImage = document.getElementById("mainImage");

var imageArray = ["../resources/dado1.png", "../resources/dado2.png", "../resources/dado3.png", "../resources/dado4.png", "../resources/dado5.png", "../resources/dado6.png"];
var imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

var intervalHandle = setInterval(changeImage,250);