const btn_menu=document.querySelector('#btn-menu');
const menu = document.querySelector('#menu');
const btn_red=document.querySelector('#btn-red');
const btn_gray=document.querySelector('#btn-gray');
menu.style.display="none";
btn_menu.style.backgroundImage="url(/src/images/icon-hamburger.svg)";

btn_red.addEventListener('click',()=>{
    window.confirm('You pressed schedule a demo.')
});

btn_gray.addEventListener('click',()=>{
    window.confirm('You pressed to see a live preview.')
})

btn_menu.addEventListener('click',()=>{
    showMenu(menu, btn_menu);   
});

function showMenu(menu,btn_menu){
    let displayValue = menu.style.display;
    displayValue==="flex" ? 
    (   menu.style.display="none",
        btn_menu.style.backgroundImage="url(/src/images/icon-hamburger.svg)"
    ) : 
    (   menu.style.display="flex",
        btn_menu.style.backgroundImage="url(/src/images/icon-close.svg)"
    );
 
}