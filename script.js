const cardContainer = document.querySelector(".hero-card-slider")
const slideLeft = document.querySelector(".left-slider-btn")
const rightLeft = document.querySelector(".right-slider-btn")
const fixedItem = document.querySelector(".fixed-filter-item2")
const fixedItemThird = document.querySelector(".fixed-filter-item3")
const fixedItemOne = document.querySelector(".fixed-filter-item1")
const submenu = document.querySelector(".submenu")
const submenuThird = document.querySelector(".submenu3")
const submenuOne = document.querySelector(".submenu1")
const MoreCardBtn = document.querySelector(".load-more-btn")
const cardCover= document.querySelector(".card-group-container")
const cards = document.querySelectorAll(".card-1")

rightLeft.addEventListener("click", ()=>{
    cardContainer.classList.add("slide")
})
slideLeft.addEventListener("click", ()=>{
    cardContainer.classList.remove("slide")
})

fixedItemThird.addEventListener("click",(e)=>{
    submenuThird.classList.toggle("submenu-dnone")
    submenu.classList.add("submenu-dnone")
    submenuOne.classList.add("submenu-dnone")
    e.stopPropagation();
})
fixedItem.addEventListener("click",(e)=>{
    submenu.classList.toggle("submenu-dnone")
    submenuThird.classList.add("submenu-dnone")
    submenuOne.classList.add("submenu-dnone")
    e.stopPropagation();
})
fixedItemOne.addEventListener("click",(e)=>{
    submenuOne.classList.toggle("submenu-dnone")
    submenu.classList.add("submenu-dnone")
    submenuThird.classList.add("submenu-dnone")
    e.stopPropagation();
})

document.body.addEventListener("click",()=>{
    submenuOne.classList.add("submenu-dnone")
    submenu.classList.add("submenu-dnone")
    submenuThird.classList.add("submenu-dnone")
})
submenuOne.addEventListener("click",(e)=>{
    e.stopPropagation();
})
submenu.addEventListener("click",(e)=>{
    e.stopPropagation();
})
submenuThird.addEventListener("click",(e)=>{
    e.stopPropagation();
})

document.addEventListener("DOMContentLoaded", function () {
    MoreCardBtn.addEventListener("click", () => {
        cards.forEach((card) => {
            const clonedCard = card.cloneNode(true); // Clone each card element
            cardCover.appendChild(clonedCard); // Append the cloned card to cardCover
        });
        console.log("clicked");
    });
});
