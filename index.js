const open_menu = document.querySelector('.menu_burger');
const close_menu = document.querySelector('.close_img');
const test = document.querySelector('#test');



open_menu.addEventListener('click',function(){
    test.classList.remove("side_ul");
    test.classList.add("test");    
})


close_menu.addEventListener('click',function(){
    test.classList.remove("test");
    test.classList.add("side_ul");
})