var iceBreakers = Array(
	"What is your pant size?",
	"What is your personal email address?",
	"Do the truffle shuffle!",
	"Boxers or Briefs?",
	"Who is the best wrestler of all time?",
	"What is your favorite Pokemon?",
	"Magic the Gathering or Dungeons and Dragons?",
	"Hum your favorite song until someone guess it.",
	"If you had to sit next to a memeber of the Jackson family on the bus who would you pick?",
	"What is your shoe size?",
	"Jabba the Hutt or Pizza the Hut?",
	"Cigarettes, Coffee, Alcohol, or The Weekend?",
	"Culebra o Conejo?"
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

var iceBreakerID = $('#iceBreaker');
var teamMemberID = $('#teamMember');

$('#container').on('click', '.start', function() {
	timer1 = setInterval(function () {iceBreakerID.text(randomIceBreaker());}, 20);
	timer2 = setInterval(function () {teamMemberID.text(randomTeamMember());}, 20);
	console.log("start");
	$("#button").toggleClass('stop').toggleClass('start');
});

$('#container').on('click', '.stop', function() {
	clearInterval(timer1);
	clearInterval(timer2);
	console.log("stop");
	$("#button").toggleClass('stop').toggleClass('start');
});


