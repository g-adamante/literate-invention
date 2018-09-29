function getReviews(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

function getReviewsCallback(err, data) {
  if (err !== null) {
    alert('Error: ' + err);
  } else {
    renderReviews(data);
  }
};

function renderReviews(jsonObj){
    

    var body = document.getElementsByTagName("body");
    body = body[0];
    var node = document.createElement("DIV"); 
    node.id += "reviews";
    body.appendChild(node)

    var reviewId = 0;
    var reviewRating = 0;
    var reviewDate = Date.now()
    var reviewAuthor = "";
    var reviewText = "";
    var reviewSource = "";

    for (var key in jsonObj) {
    if (jsonObj.hasOwnProperty(key)) {


        var reviewDiv = document.createElement('div')
        
        reviewId = jsonObj[key]['id']
        reviewRating = jsonObj[key]['rating']
        reviewDate = new Date(jsonObj[key]['date'])
        reviewAuthor = jsonObj[key]['author']
        reviewText = jsonObj[key]['content']
        reviewSource = jsonObj[key]['source']

        reviewDate = reviewDate.toLocaleDateString("en-US");

        reviewRating = renderStars(reviewRating);

        reviewDiv.id += "reviewBox" + reviewId
        reviewDiv.className += "col-md-4 card notification hidden"
        reviewDiv.innerHTML = "<div class='card-body'><h4 class='card-title'>"+reviewAuthor+"</h4><h6 class='card-subtitle mb-2 text-muted'>"+reviewDate+"</h6>"+reviewRating+"<p class='card-text'>"+reviewText+"</p><a id='close'><span style='top: 15px;right: 20px;position: absolute;font-size: 150%;font-weight: 900;' onclick='closePopUp(event)' class='icon-close-full card-text'></span></a><img src='"+reviewSource+".png' class='img img-responsive' style='right:10px;position: absolute;bottom: 10px;' height='30px;'></div>"
        
        node.appendChild(reviewDiv);

        }

    }

    loop(2000,5000);


}

var renderStars = function(rating){
    var stars = "<h6 class='card-subtitle mb-2 text-muted'>";
                      
    // fill in gold stars
    for (var i = 0; i < rating; i++) {
      stars = stars+"<span class='icon-star-full star-size checked'></span>";
    };

    // fill in empty stars
    if(rating < 5){
      for (var i = 0; i < (5 - rating); i++) {
        stars = stars+"<span class='icon-star-full star-size'></span>";
      };
    }
    stars = stars+"</h6>";
    return stars;
}


function slideDownUp(elem, ms) {
    elem.style.maxHeight = '1000px';
    elem.style.opacity   = '1';
    sleep(ms).then(function(){
        elem.style.maxHeight = '0';
        elem.style.opacity = '0';
    });


}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


function showPopUps(popUpArray,intervalMS, displayMS){
   
    processArray(popUpArray, intervalMS, displayMS);
  
  };

async function delayedPop(item, intervalMS, displayMS){
  
  await sleep(intervalMS);
  
  slideDownUp(item, displayMS);
}

async function processArray(array, intervalMS, displayMS){
  for (const item of array) {
    await delayedPop(item, intervalMS, displayMS);
  };
}
function loop(intervalMS, displayMS){

  var popUpArray = Array.from(document.getElementsByClassName('notification'));
  
  totalMS = intervalMS + displayMS

  loopInterval = popUpArray.length * totalMS

  loopInterval += 1000;

  showPopUps(popUpArray,totalMS,displayMS);

  window.setInterval(function(){showPopUps(popUpArray,totalMS,displayMS);},loopInterval);
  
}