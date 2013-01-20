var VM = VM || {};


VM.core = (function() {

	function init(){

		$("html").removeClass("no-js");

		if($('video').length){
			VM.video.init();
			VM.video.bind();		
		}

	}
	
	return {
		init: init
	};

})();

VM.video = (function(){

	function init(){

		var myVid = document.getElementById("video-player");

		setInterval(function(){
			var currentTime = Math.round(myVid.currentTime);
			$('.current-time').find('span').text(currentTime + ' Secs');
		}, 1000);
	}
	
	function bind(){

		var myVid = document.getElementById("video-player");

		myVid.addEventListener("canplay", function() {
		    $('.ready').prepend('<p>The Video is ready to play</p>');
		});

		myVid.addEventListener("ended", function() {
		    alert("Video ended!");
		});

		$("button").on('click',function(){
			var control = $(this).attr('class');

			switch(control)
			{
			case "playpause":
			  	playPause();
			  	break;
			  case "muted":
				muted();
				break;
			}
		});

		function playPause()
		{ 
			if (myVid.paused){ 
				myVid.play();
				$('.pause').show();
				$('.play').hide(); 
			}
			else{ 
				myVid.pause();
				$('.play').show();
				$('.pause').hide();
			} 
		} 

		function muted()
		{ 
			if(myVid.muted){
				myVid.muted = false;
				$('.unmute').hide();
				$('.mute').show();
			}else{
				myVid.muted = true;
				$('.mute').hide();
				$('.unmute').show();
			}
		}  
	}

	return {
		init: init,
		bind : bind
	};

})();


$(document).ready(function () {

	VM.core.init();

});
