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

var data = {
    // A labels array that can contain any sort of values
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [100, 300, 600, 900, 1200, 1600, 1900]
    ]
  };
  
  // Create a new line chart object where as first parameter we pass in a selector
  // that is resolving to our chart container element. The Second parameter
  // is the actual data object.
  var chart = new Chartist.Line('.ct-chart', data);
  