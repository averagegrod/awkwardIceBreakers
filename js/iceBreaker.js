var iceBreakers = Array(
	"What is your pant size?",
	"What is your personal email address?",
	"Do the truffle shuffle!",
	"Who is the best wrestler of all time?",
	"What is your favorite Pokemon?",
	"Magic the Gathering or Dungeons and Dragons?",
	"Hum your favorite song until someone guesses it.",
	"If you had to sit next to a memeber of the Jackson family on the bus who would you pick?",
	"What is your shoe size?",
	"Jabba the Hutt or Pizza the Hut?",
	"Cigarettes, Coffee, Alcohol, or The Weekend?",
	"Culebra o Conejo?",
	"Do you prefer PIDDS or FIDDS?"
);

var teamMembers = Array(
	"Bill",
	"Steve",
	"Alice",
	"Mary",
	"Eric",
	"Mike",
	"Dennis",
	"Garrett",
	"Terri",
	"Barb",
	"Ralph",
	"Elizabeth"
);

var safeWords = Array(
	"Pffft.",
	"Derrick",
	"Now that's how you get pink eye.",
	"Thank you sir may I have another?",
	"I can't answer that without my attorney present.",
	"I have an itch.",
	"Nom Nom Nom.",
	"Why'd it have to be snake?",
	"Bananas",
	"B - O - L - O - G - N - A",
	"There's a snake in my boots!"
);

var spinWords = Array(
	"Do you feel lucky?",
	"Lets break some ice."

);

var timer1 = 0;
var timer2 = 0;

function randomIceBreaker(){
	var iceBreaker = iceBreakers[Math.floor(Math.random()*iceBreakers.length)];
	return iceBreaker
}
function randomTeamMember(){
	var teamMember = teamMembers[Math.floor(Math.random()*teamMembers.length)];
	return teamMember
}

function randomSafeWord(){
	var safeWord = "Safe Word: "
	safeWord = safeWord + safeWords[Math.floor(Math.random()*safeWords.length)];
	return safeWord
}

var iceBreakerID = $('#iceBreaker div.text');
var teamMemberID = $('#teamMember div.text');
var safeWordID = $('#safeWord div.text');

$('#container').on('click', '.start', function() {
	var $randomIceBreaker;

	timer1 = setInterval(function () {iceBreakerID.text(randomIceBreaker());}, 20);
	timer2 = setInterval(function () {teamMemberID.text(randomTeamMember());}, 20);
	safeWordID.text("");

	$("#button").toggleClass('stop').toggleClass('start');

	$(".stop .text").text('STOP');
});

$('#container').on('click', '.stop', function() {
	clearInterval(timer1);
	clearInterval(timer2);
	safeWordID.append(randomSafeWord());
	$("#button").toggleClass('stop').toggleClass('start');
	$(".start .text").text('GO');
});


