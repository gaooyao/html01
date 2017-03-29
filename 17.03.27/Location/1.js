function button01() {
    var show = document.getElementById("show11");
    var input = document.getElementById("input");
    var button = document.getElementById("button01");

    var hostname=location.hostname;
    var pathname=location.pathname;
    var port=location.port;
    var protocol=location.protocol;
    var href=location.href;



    show.innerHTML=hostname+"<br/>"+pathname+"<br/>"+port+"<br/>"+protocol+"<br/>"+href;
}