'use strict';

var $likeBtn= $('#likeBtn');
var $resetBtn= $('#resetBtn');

var count = 0;

$likeBtn.click(function() {
	count++;
	if(count === 1){
		$likeBtn.html(count+ ' ' + 'Like');
	} else{
		$likeBtn.html(count+ ' ' + 'Likes');
	}
	console.log($likeBtn);
});

	
$resetBtn.click(function(){
	count = 0;
	$likeBtn.html(count+ ' ' + 'Likes');
});