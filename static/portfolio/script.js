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
      [100, 300, 600, 900, 1200, 1600]
    ]
  };

  var options = {
    axisY: {
        showLabel: false }}

  var chart = new Chartist.Bar('#chart1', data, options );

  $(document).ready(function(){

    $('.ct-bar').addClass('chart-hidden animated')
  })

  var waypointAnimation = new Waypoint({
    element: $('#mais'),
    handler: function() {
        $('.ct-bar').removeClass('chart-hidden')
        $('.ct-bar').addClass('zoomIn')
        $('#mais').addClass('animated tada')
    },
    offset: 150 
  })

  var waypointAnimation = new Waypoint({
    element: $('#mais'),
    handler: function() {
        $('#mais').removeClass('tada')
    },
    offset: 155 
  })
  
  var waypointAnimation = new Waypoint({
    element: $('#waypoint2'),
    handler: function() {
        
        $('#mais').removeClass('tada')
    },
    offset: 350 
  })
  
  var waypointAnimation = new Waypoint({
    element: $('#waypoint2'),
    handler: function() {
        $('#mais').addClass('tada')
    } ,
    offset: 355 
  })

