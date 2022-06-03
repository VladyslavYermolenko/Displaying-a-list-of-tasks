const popUp = document.getElementById('pop-up');
const openBtn = document.getElementById('button-add-new-task');
const closeBtn = document.getElementsByClassName('close')[0];

window.onclick = function (event) {
    // if (event.target == popUp) {
    //     popUp.style.display = "none";
    // }
    console.log('test');
}

openBtn.onclick = function () {
    popUp.style.display = 'block';
}

closeBtn.onclick = function () {
    popUp.style.display = 'none';
}
