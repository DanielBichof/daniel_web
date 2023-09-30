document.title = "Daniel Bichof"


window.addEventListener("load", (event) => {
    let data = new Date().getFullYear();
    document.querySelector('.footer').innerHTML = `<p>${data} - Daniel Bichof &copy</p>`
    console.log("page is fully loaded");
});

