var VM = VM || {};


VM.core = (function() {

	function init(){

		$("html").removeClass("no-js");

		if($('video').length){
			VM.video.bind();		
		}

	}
	
	return {
		init: init
	};

})();

VM.video = (function(){
	
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
			case "bigger":
				bigger()
			 	break;
			case "normal":
				normal();
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


		function bigger()
		{ 
			myVid.width=680; 
		} 

		function normal()
		{ 
			myVid.width=560; 
		} 
	}

	return {
		bind : bind
	};

})();


$(document).ready(function () {

	VM.core.init();

});
