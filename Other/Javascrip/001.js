/**
 * Created by goyo- on 2017/3/23.
 */
function button01() {
    var x = document.getElementById("input01").value;
    if (x == "" || isNaN(x)) {
        document.getElementById("p01").innerHTML="输入的不对";
    }
}