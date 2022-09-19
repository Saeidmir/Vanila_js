container = document.querySelector('#container')
console.dir(container);

window.onmousemove = function(e) {
    // console.log(e);
    let x = e.screenX/5;
    let y = e.screenY/5;
    container.style.backgroundPositionX = x+'px';
    container.style.backgroundPositionY = y+'px';
}