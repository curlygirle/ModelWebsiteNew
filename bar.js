var prevScroll = window.pageYOffset;
window.onscroll = function(){
    var currentScroll = window.pageYOffset;
    if (prevScroll > currentScroll) {
        document.getElementById("blogheader").style.top = "0";
    }
    else{
        document.getElementById("blogheader").style.top = "-100px"
    }
    prevScroll = currentScroll
}