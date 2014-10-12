function hasGetUserMedia() {
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

function connectUserMedia(){

	navigator.getUserMedia  = navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia;

	var video = document.querySelector("video");
	function successCallback(stream) {
	  window.stream = stream; // stream available to console
	  if (window.URL) {
		video.src = window.URL.createObjectURL(stream);
	  } else {
		video.src = stream;
	  }
	};

	function errorCallback(error){
	  console.log("navigator.getUserMedia error: ", error);
	};

	if (navigator.getUserMedia) {
		var constraints = {audio: false, video: true};
		//var hdConstraints = { video: { mandatory: { minWidth: 1280, minHeight: 720 } } };
		navigator.getUserMedia(constraints, successCallback, errorCallback);
	} 
	else {
		console.log('getUserMedia() is not supported in your browser');
	}
};

connectUserMedia()