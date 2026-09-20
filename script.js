const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");
if(toggle) toggle.addEventListener("click",()=>nav.classList.toggle("open"));

document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const tabs=document.querySelectorAll(".tab");
const cards=document.querySelectorAll(".menu-card");
tabs.forEach(tab=>{
  tab.addEventListener("click",()=>{
    tabs.forEach(t=>t.classList.remove("active"));
    tab.classList.add("active");
    const filter=tab.dataset.filter;
    cards.forEach(card=>{
      card.classList.toggle("hidden",filter!=="all" && card.dataset.category!==filter);
    });
  });
});
document.getElementById("year").textContent=new Date().getFullYear();
