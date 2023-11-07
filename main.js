
$(document).on(road, function () {


// // ハンバーガーメニューアニメ
// const menu = document.querySelector(".hamburger");
// const nav = document.querySelector(".header-list");
// const menuList =document.querySelectorAll(".header-list li")

// menu.addEventListener("click",()=>{
//   nav.classList.toggle("menu-active");
  
// menuList.forEach((link,index)=>{
//   if(link.style.animation){
//     link.style.animation ="";
//   }else{
//     link.style.animation =`menuAnime 0.5s ease forwards ${index /7 +0.4}s`;
//   }
// });
// menu.classList.toggle("toggle");
// });

// ヘッダーのスクロール制御
const header = document.getElementById("header");
window.addEventListener('scroll', function(){
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add('resize');
  } else {
    header.classList.remove('resize');
  }
});

//スマホでメニュー表示・非表示
const navMenu = document.querySelector('.navLinks');
document.querySelector(".burger").addEventListener('click', () => {
navMenu.classList.toggle('active');
},);
});
