/* DOM Elements */
var catElem = $('#cat');
var clickCountElem = $('#click-count');
var clickRankElem = $('#click-rank');

/* Data Variables */
var clickCount = 0;
var clickTime = Date.now();
var src = 'http://thecatapi.com/api/images/get?format=src&';
var rank = 0;
var ranks = ['Newbie', 'Inept', 'Poor', 'Weak', 'Mediocre', 'Unskilled', 'Green', 'Beginner', 'Novice', 'Amateur', 'Apprentice', 'Initiated', 'Qualified', 'Trained', 'Able', 'Competent', 'Adept', 'Capable', 'Skilled', 'Experienced', 'Proficient', 'Good', 'Great', 'Inspiring', 'Impressive', 'Veteran', 'Professional', 'Specialist', 'Advanced', 'Remarkable', 'Expert', 'Exceptional', 'Amazing', 'Incredible', 'Marvelous', 'Astonishing', 'Outstanding', 'Champion', 'Elite', 'Superior', 'Supreme', 'Master', 'Grand Master', 'Arch Master', 'Supreme Master', 'Ultimate Master', 'Great Master', 'Great Grand Master', 'Great Arch Master', 'Great Supreme Master', 'Great Ultimate Master'];

/* Update cat image, click-count, and click-rank when the image is clicked */
$('#cat').click(function(e) {
	if (Date.now() - clickTime > 1000) {
		if (clickCount % 10 === 0 && rank < 50) {
			clickRankElem.text(' {' + ranks[ ++rank ] + '}');
		}
		clickCountElem.text( ++clickCount );
		catElem.attr('src', src + Math.random());
		clickTime = Date.now();
	}
});

/* Perform facebook post */
var share = function() {
	var info = 'My Cat Clicker Premium Rank: ' + clickCount + ' {' + ranks[rank] + '}.';
	FB.ui({
        method: 'feed',
        caption: 'By Alexander Verge',
        description: info,
        link: 'https://github.com/alexanderverge/cat-clicker-premium',
    });
};
