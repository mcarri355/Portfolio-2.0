// Animation For Nav Button
function hamburger(x){
    x.classList.toggle("change");
}

$(window).on('load',function(){
    $('#menu1').hide(100).show(2000);
})
