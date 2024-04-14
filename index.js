const onRoute = (e) => {
    e.preventDefault();
    const path = e.target.pathname
    window.history.pushState({}, "", path);
}

const routes = {
    FALL_BACK : "/pages/404.html",
    "/": "/pages/home.html",
    "/about": "/pages/about.html"
};

const onRouteChange = () => {
    const pathName = window.location.pathname;
    const route = routes[pathName];
    console.log(pathName, route);

    fetch(route).then(data => data.text()).then(html => document.getElementById("content").innerHTML = html);
};

document.querySelectorAll("a").forEach(el => {
    el.addEventListener("click", (e) => {
        onRoute(e);
        onRouteChange();
    })
})

window.onpopstate = onRouteChange;
onRouteChange();