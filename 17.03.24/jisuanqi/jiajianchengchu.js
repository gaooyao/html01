function jiafa() {
    try {
        var a = document.getElementById("i1").value;
        var b = document.getElementById("i2").value;
        if (isNaN(a)) throw "请检查输入";
        if (isNaN(b)) throw "请检查输入";
    }
    catch (cuowu) {
        alert("错误：" + cuowu);
    }
    var jieguo = Number(a) + Number(b);
    Number(jieguo);
    document.getElementById("show1").innerHTML = jieguo;
};
function jianfa() {
    try {
        var a = document.getElementById("i1").value;
        var b = document.getElementById("i2").value;
        if (isNaN(a)) throw "请检查输入";
        if (isNaN(b)) throw "请检查输入";
    }
    catch (cuowu) {
        alert("错误：" + cuowu);
    }
    var jieguo = Number(a) - Number(b);
    Number(jieguo);
    document.getElementById("show1").innerHTML = jieguo;
};
function chengfa() {
    try {
        var a = document.getElementById("i1").value;
        var b = document.getElementById("i2").value;
        if (isNaN(a)) throw "请检查输入";
        if (isNaN(b)) throw "请检查输入";
    }
    catch (cuowu) {
        alert("错误：" + cuowu);
    }
    var jieguo = Number(a) * Number(b);
    Number(jieguo);
    document.getElementById("show1").innerHTML = jieguo;
};
function chufa() {
    try {
        var a = document.getElementById("i1").value;
        var b = document.getElementById("i2").value;
        if (isNaN(a)) throw "请检查输入";
        if (isNaN(b)) throw "请检查输入";
        if (b == 0) throw "除数不能为零";
    }
    catch (cuowu) {
        alert("错误：" + cuowu);
    }
    var jieguo = Number(a) / Number(b);
    Number(jieguo);
    document.getElementById("show1").innerHTML = jieguo;
};