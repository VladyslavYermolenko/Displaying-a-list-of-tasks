const popUp = document.getElementById('pop-up');
const openBtn = document.getElementById('button-add-new-task');
const closeBtn = document.getElementsByClassName('close')[0];

openBtn.onclick = function () {
    popUp.style.display = 'block';
}

closeBtn.onclick = function () {
    popUp.style.display = 'none';
}