// smooth scroll

document.querySelectorAll(".nav-link").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
})

})

})


// Get elements
var modal = document.getElementById("imgModal");
var img = document.querySelector(".profile-img");
var modalImg = document.getElementById("zoomedImg");
var closeBtn = document.querySelector(".close");

// When image is clicked
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
}

// When close button is clicked
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// Close when clicking outside image
modal.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}
