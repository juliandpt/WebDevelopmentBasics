var imageArray = ["../resources/dado1.png", "../resources/dado2.png", "../resources/dado3.png", "../resources/dado4.png", "../resources/dado5.png", "../resources/dado6.png"];
var imageIndex = 0;
var intervalHandle;

$("#dado").dblclick(function() {
    intervalHandle = setInterval(function(){
            $("#dado").attr("src",imageArray[parseInt(Math.random(imageIndex)*6)]);
            imageIndex++;
            if (imageIndex >= imageArray.length) {
            imageIndex = 0;
        }
    },250);  
});

$("#dado").click(function(){
    clearInterval(intervalHandle);
});

