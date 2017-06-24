$(function()
 {
	$.scrollify(
	{
			
	section : "section",
	sectionName : "section-name",
	interstitialSection : "",
	easing: "easeOutExpo",
	scrollSpeed: 1100,
	offset : 0,
	scrollbars: true,
	standardScrollElements: "",
	setHeights: true,
	overflowScroll: true,
	updateHash: true,
	touchScroll:true,
	before:function() {},
	after:function() {},
	afterResize:function() {},
	afterRender:function() {}

  });


 	$(document).ready(function() 
 	{
 		var myvideo=document.getElementById("video1");
 		var myvideo2=document.getElementById("video2");
 		var myvideo3=document.getElementById("video3");
 		var myvideo4=document.getElementById("video4");
 		var playvid = true;


			$('.home').waypoint(function()
			{

				myvideo.play();
				myvideo2.pause();	
				myvideo3.pause();	
				myvideo4.pause();		
			})

			$('.two').waypoint(function()
			{
				myvideo2.play();
				myvideo.pause();	
				myvideo3.pause();	
				myvideo4.pause();	
			})

			$('.three').waypoint(function()
			{
				myvideo3.play();
				myvideo.pause();	
				myvideo2.pause();	
				myvideo4.pause();
			})

			$('.four').waypoint(function()
			{
				myvideo4.play();	
				myvideo.pause();	
				myvideo2.pause();	
				myvideo3.pause();
			})


	})




	

});


