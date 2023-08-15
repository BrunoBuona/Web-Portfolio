var t = new Typed(".typing",{strings:["Desarrollador Web","Docente IT", "Freelancer"],typeSpeed:100,BackSpeed:40,loop:true})
const n=document.querySelector(".nav"),e=n.querySelectorAll("li"),o=e.length,l=document.querySelectorAll(".section"),r=l.length
for(let i=0;i<o;i++){const o=e[i].querySelector("a");o.addEventListener("click",function(){for(let t=0;t<o;t++){e[t].querySelector("a").classList.remove("active");const i=o.getAttribute("href").split("#")[1]
i===e[t].querySelector("a").getAttribute("href").split("#")[1]&&e[t].querySelector("a").classList.add("active")}!function(t){for(let i=0;i<r;i++)l[i].classList.remove("active")
const n=t.getAttribute("href").split("#")[1]
document.querySelector("#"+n).classList.add("active")}(o),window.innerWidth<1200&&function(){{document.querySelector(".aside").classList.toggle("open")
document.querySelector(".nav-toggler").classList.toggle("open")
for(let t=0;t<r;t++)l[t].classList.toggle("open")}}()})}
document.querySelector(".nav-toggler").addEventListener("click",()=>{{document.querySelector(".aside").classList.toggle("open")
document.querySelector(".nav-toggler").classList.toggle("open")
for(let t=0;t<r;t++)l[t].classList.toggle("open")}})
