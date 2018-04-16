//1번 과제
function changeStyle(id, color, fontSize, backgroundColor, width) {
    document.getElementById(id).style.color = color;
    document.getElementById(id).style.fontSize = fontSize + 'px';
    document.getElementById(id).style.backgroundColor = backgroundColor;
    document.getElementById(id).style.width = width + 'px';
}
changeStyle('test', 'red', 20, 'yellow', 100);

// 폰트사이즈를 키우고 줄이는 버튼

document.getElementById('plus-btn').addEventListener('click', function() {
    plusFontSize('test');
});
document.getElementById('minus-btn').addEventListener('click', function() {
    minusFontSize('test');
});

function plusFontSize(id) {
    var fontSize = document.getElementById(id).style.fontSize;
    var plusFontSizes = parseInt(fontSize);
    plusFontSizes++;
    document.getElementById(id).style.fontSize = plusFontSizes + 'px';
}

function minusFontSize(id) {
    var fontSize = document.getElementById(id).style.fontSize;
    var minusFontSizes = parseInt(fontSize);
    minusFontSizes--;
    document.getElementById(id).style.fontSize = minusFontSizes + 'px';
}

//2번 과제
function sum(num) {
    return function(num2) {
        return num + num2;
    }
}

//3번 과제
function typeToKor(parm) {
    var parmType = typeof parm;
    if (parmType == 'string') {
        console.log('문자');
    }
    if (parmType == 'number') {
        console.log('숫자')
    }
    if (parmType == 'boolean') {
        console.log('참거짓')
    }
    if (parmType == 'object') {
        console.log('객체')
    }
}
//4번 과제
function biggest(num1, num2, num3, num4) {
    return Math.max(num1, num2, num3, num4);
}