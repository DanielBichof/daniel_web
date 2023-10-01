
let getPath = () => {
    let str = window.location.pathname;
    str = str.replace('/', '');
    path_route = str.charAt(0).toUpperCase() + str.slice(1);
    return path_route;
}

let setTitle = () => {
    let path_route = getPath();
    document.title = path_route.length == 0 ? "Daniel Bichof" : `Daniel Bichof | ${path_route}`
}

let setFooterDate = () => {
    window.addEventListener("load", (event) => {
        let data = new Date().getFullYear();
        document.querySelector('.footer').innerHTML = `<p>${data} - Daniel Bichof &copy</p>`
    });
}

var setPageName = () => {
    var pathName = getPath();
    titleName = pathName.length == 0 ? "Home" : pathName;
    console.log(titleName);

    window.addEventListener("load", (event) => {
        var item = document.querySelector('.title');
        item.innerHTML = `<p>${titleName}</p>`
    });

}

let setFavcon = () => {

    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = '/images/favicon/favicon-32x32.png';
}

let loadSpin = () => {
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loader');
        loader.classList.add('loader-hidden');
        loader.addEventListener('transitionend', () => {
            document.removeChild('loader')
        });
    }
    )
}

let main = () => {
    setTitle();
    setFooterDate();
    setFavcon();
    setPageName();
    loadSpin();
}

main();
