$(document).ready(function() {
  $(function() {
//hide tweet button and character count button, when text area is clicked it doubles in size//
$('textarea').focus(function() {

	var that = $(this);
	that.css ('height', that.height(45));
$('#tweet-controls').show();
$('.button').show();
});

$('.button').click(function() {
	//var that = $(this);
$('textarea').css ('height', '40px')
});

});

		$('textarea').keydown(function() {
			var count     = $(this).val().length,
				remaining = 140 - count;

			$('#char-count').text(remaining);

			if(remaining <= 10) {
				$('#char-count').css('color', 'red');
			} else {
				$('#char-count').css('color', '#999');
			}

			if (count > 140) {
				$('#tweet-submit').attr('disabled', 'disabled');
			} else {
				$('#tweet-submit').attr('disabled', false);
			}
		});
    $('#tweet-submit').click(function() {
		var tweetWords = $('.tweet-compose').val();
		var newTweet = $('.tweet').clone().eq(0);
		var myName = $('#myName').html();
		var picture = $('#twitterpic').attr('src');

		newTweet.find('.tweet-text').html(tweetWords);
		newTweet.find('.fullname').html(myName);
		newTweet.find('.username').html("@Ben");
		newTweet.find('.avatar').attr('src', picture);

		newTweet.prependTo('#stream');
		//$('#stream').prepend($(newTweet));
		$('textarea').val('');
		$('#char-count').text("140");
	});

//retweet, timestamp buttons only expand if the tweet is clicked on//
		$('.tweet').click(function() {
			//animate and show the reply/stats
			$(this).find('.stats').show({duration: 400});
		})



});
