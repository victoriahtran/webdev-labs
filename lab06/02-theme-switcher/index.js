/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const themeSwitch = (theme) => {
   document.querySelector("body").className = theme
};

document.querySelector("#default").addEventListener('click', () => themeSwitch(""));
document.querySelector("#desert").addEventListener('click', () => themeSwitch("desert"));
document.querySelector("#ocean").addEventListener('click', () => themeSwitch("ocean"));
document.querySelector("#high-contrast").addEventListener('click', () => themeSwitch("high-contrast"));