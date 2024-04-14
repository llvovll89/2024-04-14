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

function fn(a = 10, b = 100) {
    // 함수 스코프 안에서 여러번 호출되서 값이 변경됨
    let addNum = 0;

    function inFn() {
        a += b;
        addNum++;
        Swal.fire(addNum);
    }

    return inFn;
}

// 클로저 
const result = fn();
result()
result()
result()
result()

console.log(result());