// const foo = "foo"


$(document).ready(function () {
    $('.display-slick').slick();
});

window.onload = function () {
    document.getElementById("button").addEventListener("click", buttonClick);
}

function buttonClick() {
    let healthAnswer = document.getElementById('answer')
    if (healthAnswer.style.display === "none") {
        healthAnswer.style.display = "block";
    } else {
        healthAnswer.style.display = "none";
    }
}


// var carouselDiv = $(".display-slick");

// carouselDiv.slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
// });

// carouselDiv.show();