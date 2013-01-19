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
		    alert("We're ready!");
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
			case "bigger":
				bigger()
			 	break;
			case "smaller":
				smaller();
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

		function bigger()
		{ 
			myVid.width=560; 
		} 

		function smaller()
		{ 
			myVid.width=320; 
		} 

		function normal()
		{ 
			myVid.width=420; 
		} 
	}

	return {
		bind : bind
	};

})();


$(document).ready(function () {

	VM.core.init();

});
