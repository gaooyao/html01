function button01() {
    var show = document.getElementById("show11");
    var input = document.getElementById("input");
    var button = document.getElementById("button01");


    var mycars = new Array();
    mycars[0] = "one";
    mycars[1] = "two";
    mycars[2] = "three";
    var b=mycars [0]+"<br/>";
    for (var a=1;a<mycars.length;a++){
        var b=b+mycars[a]+"<br/>";
    }
    var c=mycars.join(",");
    show.innerHTML=b+"<br/>"+c;
}