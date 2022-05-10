let search = document.querySelector(".search");
let searchIcon = document.querySelector(".search-icon");
let navList = document.querySelector(".nav-list");
let closeSearch = document.querySelector(".close");
let overlay = document.querySelector(".overlay");
let searchInput = document.querySelector(".search-input");

// for mobile
let toggleIcon = document.querySelector(".toggler-icon");
let header  = document.querySelector(".header");

searchIcon.addEventListener("click",()=>{
    search.classList.add("active");
    navList.classList.add("hide");
    overlay.classList.add("active");
    searchInput.focus();
})

closeSearch.addEventListener("click",()=>{
    search.classList.remove("active");
    navList.classList.remove("hide");
    overlay.classList.remove("active");
})

toggleIcon.addEventListener("click",()=>{
    header.classList.toggle("active");
})