(()=>{const t={FALL_BACK:"/pages/404.html","/":"/pages/home.html","/about":"/pages/about.html"},e=()=>{const e=window.location.pathname,n=t[e];console.log(e,n),fetch(n).then((t=>t.text())).then((t=>document.getElementById("content").innerHTML=t))};document.querySelectorAll("a").forEach((t=>{t.addEventListener("click",(t=>{(t=>{t.preventDefault();const e=t.target.pathname;window.history.pushState({},"",e)})(t),e()}))})),window.onpopstate=e,e()})();