function button01() {
    var show = document.getElementById("show11");
    var input = document.getElementById("input");
    var button = document.getElementById("button01");


    var w=window.innerWidth;
    var h=window.innerHeight;
    var sw=screen.availWidth;
    var sh=screen.availHeight;
    show.innerHTML=w+"<BR/>"+h+"<BR/>"+sw+"<BR/>"+sh;
}