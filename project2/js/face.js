// 選擇body標籤 並監聽滑鼠移動

document.querySelector('body').addEventListener('mousemove',eyeball);
function eyeball() {
    var eye=document.querySelectorAll('.eye');
    eye.forEach(function (eye) {
        // getBoundingClientRect().left 代表eye左邊絕對位置的數值
        let x=(eye.getBoundingClientRect().left)+(eye.clientWidth/2);
        let y=(eye.getBoundingClientRect().top)+(eye.clientHeight/2);
        let radian= Math.atan2(event.pageX-x,event.pageY-y);
        let rot =(radian*(180/Math.PI)*-1)+270;
        let mouseX=event.pageX;
        let mousey=event.pageY;
        console.log("x:"+mouseX);
        console.log("y"+mousey);
        eye.style.transform="rotate("+rot+"deg)";
    })
}