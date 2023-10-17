const cardContainer = document.querySelector(".hero-card-slider")
const slideLeft = document.querySelector(".left-slider-btn")
const slideRight = document.querySelector(".right-slider-btn")
const fixedItem = document.querySelector(".fixed-filter-item2")
const fixedItemThird = document.querySelector(".fixed-filter-item3")
const fixedItemOne = document.querySelector(".fixed-filter-item1")
const submenu = document.querySelector(".submenu")
const submenuThird = document.querySelector(".submenu3")
const submenuOne = document.querySelector(".submenu1")
const MoreCardBtn = document.querySelector(".load-more-btn")
const cardCover = document.querySelector(".card-group-container")
const cards = document.querySelectorAll(".card-1")
const submenuIcon = document.querySelector(".submenu-icon")
const submenuIcon2 = document.querySelector(".submenu-iconSecond")
const submenuIcon3 = document.querySelector(".submenu-iconThird")
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const uncheckButtons = document.querySelectorAll(".uncheckButton");
const rangeInput = document.getElementById("myRange");
const clearButton = document.getElementById("clearButton");

slideRight.addEventListener("click", () => {
    cardContainer.classList.add("slide")
})
slideLeft.addEventListener("click", () => {
    cardContainer.classList.remove("slide")
})

fixedItemThird.addEventListener("click", (e) => {
    submenuThird.classList.toggle("submenu-dnone")
    submenu.classList.add("submenu-dnone")
    submenuOne.classList.add("submenu-dnone")

    submenuIcon.classList.remove("rotate")
    submenuIcon2.classList.remove("rotate")
    submenuIcon3.classList.toggle("rotate")
    e.stopPropagation();
})
fixedItem.addEventListener("click", (e) => {
    submenu.classList.toggle("submenu-dnone")
    submenuThird.classList.add("submenu-dnone")
    submenuOne.classList.add("submenu-dnone")

    submenuIcon.classList.remove("rotate")
    submenuIcon2.classList.toggle("rotate")
    submenuIcon3.classList.remove("rotate")

    e.stopPropagation();
})
fixedItemOne.addEventListener("click", (e) => {
    submenuOne.classList.toggle("submenu-dnone")
    submenu.classList.add("submenu-dnone")
    submenuThird.classList.add("submenu-dnone")

    submenuIcon.classList.toggle("rotate")
    submenuIcon2.classList.remove("rotate")
    submenuIcon3.classList.remove("rotate")
    e.stopPropagation();
})

document.body.addEventListener("click", () => {
    submenuOne.classList.add("submenu-dnone")
    submenu.classList.add("submenu-dnone")
    submenuThird.classList.add("submenu-dnone")
    submenuIcon.classList.remove("rotate")
    submenuIcon2.classList.remove("rotate")
    submenuIcon3.classList.remove("rotate")
})
submenuOne.addEventListener("click", (e) => {
    e.stopPropagation();
})
submenu.addEventListener("click", (e) => {
    e.stopPropagation();
})
submenuThird.addEventListener("click", (e) => {
    e.stopPropagation();
})

document.addEventListener("DOMContentLoaded", function () {
    MoreCardBtn.addEventListener("click", () => {
        cards.forEach((card) => {
            const clonedCard = card.cloneNode(true); 
            cardCover.appendChild(clonedCard);
        });
        console.log("clicked");
    });
});
uncheckButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    });
});
clearButton.addEventListener("click", function() {
    // Set the range input's value to an empty string to clear it
    rangeInput.value = "";
    // Alternatively, you can set it to a default value if you have one
    // rangeInput.value = 50; // Set to a default value (e.g., 50)
  });
