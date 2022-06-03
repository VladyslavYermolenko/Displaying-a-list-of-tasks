function add() {

}

function mode() {
    const body = document.querySelector('body');
    const themeMode = document.querySelector('#themeMode');
    const allContainers = document.querySelectorAll('#container');  

    if (themeMode.classList.contains('fa-sun')) {
        themeMode.classList.remove('fa-sun');
        themeMode.classList.add('fa-moon');

        body.classList.remove('background-dark');
        body.classList.add('background-light');

        [].forEach.call(allContainers, function (container) {
          container.classList.remove("container-dark");
          container.classList.add("container-light");
        });
    }
    else {
        themeMode.classList.remove('fa-moon');
        themeMode.classList.add('fa-sun');

        body.classList.remove('background-light');
        body.classList.add('background-dark');

        [].forEach.call(allContainers, function (container) {
          container.classList.remove("container-light");
          container.classList.add("container-dark");
        });
    }
}
