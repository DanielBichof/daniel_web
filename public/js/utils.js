let getPath = () => {
    let str = window.location.pathname;
    str = str.replace("/", "");
    path_route = str.charAt(0).toUpperCase() + str.slice(1);
    return path_route;
};

let setTitle = () => {
    let path_route = getPath();
    document.title =
        path_route.length == 0 ? "Daniel Bichof" : `Daniel Bichof | ${path_route}`;
};

let setFooterDate = () => {
    window.addEventListener("load", (event) => {
        let data = new Date().getFullYear();
        document.querySelector(
            ".footer"
        ).innerHTML = `<p>${data} - Daniel Bichof &copy</p>`;
    });
};


async function loadProfileImg() {
    var url = "https://avatars.githubusercontent.com/u/69698000?v=4"
    var imageProfile = document.createElement('img');
    imageProfile.classList.add('profile-photo');
    imageProfile.src = url;
    imageProfile.alt = "Profile";
    imageProfile.style.width = "10rem";
    imageProfile.style.borderRadius = "50%";
    sidebar = document.querySelector('.title-bar');
    sidebar.appendChild(imageProfile);
}

var setPageName = () => {
    var pathName = getPath();
    titleName = pathName.length == 0 ? "Home" : pathName;
    console.log(titleName);

    window.addEventListener("load", (event) => {
        loadProfileImg()
        var item = document.querySelector(".title-bar");


        item.innerHTML += `<p>${titleName}</p>`;
    });
};

let setFavcon = () => {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
    }
    link.href = "/images/favicon/favicon-32x32.png";
};

function loadSpin() {
    window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");
        loader.classList.add("loader-hidden");
        loader.addEventListener("transitioned", () => {
            document.removeChild(document.querySelector(".loader"));
        });
    });
}

let appendLinkSideBar = (nameLink, page) => {
    var activePage = getPath();

    let sidebar_link = document.createElement("a");

    sidebar_link.classList.add("nav-link");
    sidebar_link.href = page;
    sidebar_link.innerText = nameLink;

    let sidebar_item = document.createElement("li");

    sidebar_item.classList.add("sidebar-item");
    // sidebar_item.classList.add(link_class);
    sidebar_item.appendChild(sidebar_link);

    page = page.replace("/", "");
    str_path = page.charAt(0).toUpperCase() + page.slice(1);

    if (str_path == activePage) {
        sidebar_item.classList.add("active");
    }

    let sidebar_div = document.querySelector(".list-sidebar");
    sidebar_div.appendChild(sidebar_item);
};

var routes = {
    "index.html": "/",
    "projects.css": "/projects",
    "cookies.txt": "/experience",
    "README.md": "/about",
};

function createLinks() {
    for (let page in routes) {
        appendLinkSideBar(page, routes[page]);
    }
}

let main = () => {
    //cria links na sidebar apenas quando janela carregou
    window.addEventListener("load", () => {
        createLinks();
    });
    setPageName();
    setTitle();
    setFavcon();
    loadSpin();
};

main();
