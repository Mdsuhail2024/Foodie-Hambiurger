// const humburgerIcon = document.querySelector(".hamburger-icon")
// const closeIcon = document.querySelector(".close-icon")

// humburgerIcon.addEventListener("click", (e) => {
//     // const anchorTag = document.querySelector("nav")
//     const humburgerMenu = document.querySelector('.humburger-menu')
//     humburgerMenu.classList.toggle("humburgerRemove")

//     const openMenu = document.querySelector(".header-content")
//     console.log(openMenu);
//     // console.log(e);
//     openMenu.classList.toggle("open-menu")
    
//     closeIcon.addEventListener("click", (e) => {
//         openMenu.classList.toggle("open-menu")
//         humburgerMenu.classList.toggle("humburgerRemove")
    
//     })
// })

const humburgerIcon = document.querySelector(".humburger-menu")
const closeIcon = document.querySelector(".close-icon")
const headerContent = document.querySelector(".header-content ")
humburgerIcon.addEventListener("click", (e) => {
    console.log(headerContent);
    headerContent.classList.toggle("menu-open")
    humburgerIcon.classList.toggle("remove")
   
})
closeIcon.addEventListener("click", (e) => {
    headerContent.classList.toggle("menu-open")
    humburgerIcon.classList.toggle("remove")
} )