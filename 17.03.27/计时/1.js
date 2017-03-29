var c = 0
var t
function jishi() {
    document.getElementById('show2').value = c
    c = c + 1
    t = setTimeout("jishi()", 1000)
}