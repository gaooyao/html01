function button01() {
    var show = document.getElementById("show11");
    var input = document.getElementById("input");
    var button = document.getElementById("button01");
    var a = new Date();
    var day = a.getTime();
    show.innerHTML = a + "<br/>"+day;
}