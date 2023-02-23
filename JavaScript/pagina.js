var menu_visible = false;
let menu = document.getElementById("navega");
function menuOculto(){
if(menu_visible==false){
    menu.style.display = "block";
    menu_visible = true;
}
else{
    menu.style.display = "none";
    menu_visible = false;
}
}
let links = document.querySelectorAll("navega a")
for(var x = 0; x < links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
window.onscroll = function(){
if(document.documentElement.scrollTop > 100){
    document.querySelector('.contenido-volver')
    .classList.add('fun')
}else{
    document.querySelector('.contenido-volver')
    .classList.remove('fun')
}
}
document.querySelector('.contenido-volver')
.addEventListener('click' , () =>{
    window.scroll({
        top:0,
        behavior:'smooth'
    });
});

