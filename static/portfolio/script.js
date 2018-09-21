function doAnimation(id, animName, duration, delay) {
    var el = document.getElementById(id);
    var timer;
    function addClass() {
        el.classList.add(animName);
    }
    function removeClass() {
        el.classList.remove(animName);
    }
    setInterval(function () {
        clearTimeout(timer);
        addClass();
        timer = setTimeout(removeClass, duration);
    }, duration + delay);
}

doAnimation('conversar', 'shake', 1000, 2500);