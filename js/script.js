//1
const button = document.getElementById ("buttonchik");
const input = document.getElementById ("inputchik");
const form = document.getElementById ("formochka");


form.addEventListener("submit", function (event) {
    event.preventDefault ();
})

button.addEventListener("click", function () {
    if(input.value.trim() !== "") {
        button.textContent = input.value;
    }
});

//2
const image = document.getElementById("imgone");
image.src="img2.jpg";

//3

const link = document.getElementById ("linka");
link.href = "https://youtu.be/C0zMWogztQs?si=fHqX6bKNiBPBpSsA";

const img = document.getElementById ("imgthree");
img.alt = "Arise"

//4

const firstItem = document.getElementById("name");
firstItem.textContent = "name" ;