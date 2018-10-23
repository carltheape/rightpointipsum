let words = [
  "innovation",
  "testing",
  "synergy",
  "development",
  "transform",
  "Raizlabs",
  "work",
  "organization",
  "creative",
  "technology",
  "Sitecore",
  "Sharepoint",
  "Episerver",
  "e-commerce",
  "shopping",
  "solutions",
  "strategy",
  "platforms",
  "content",
  "analytics",
  "mobile",
  "desktop",
  "culture",
  "design",
  "cloud",
  "interface",
  "hardware",
  "alexa",
  "experts",
  "teams",
  "parter",
  "app",
  "insight",
  "data",
  "brand",
  "audit",
  "migration",
  "audit",
  "engineering",
  "Visual Studio",
  "Photoshop",
  "digital",
  "intranet",
  "frontier",
  "augmented",
  "virtual",
  "global",
  "spark",
  "unicorn",
  "network",
  "Atlanta",
  "Boston",
  "Chicago",
  "Dallas",
  "Denver",
  "Detroit",
  "Jaipur",
  "Los Angeles",
  "New York",
  "Oakland",
  "expertise",
  "management",
  "profitability",
  "performance",
  "productivity",
  "inspire",
  "intrapreneurship",
  "learning",
  "excellence",
  "integrity",
  "accountability",
  "collaboration",
  "passion",
  "La Croix",
  "Sriracha",
  "people",
  "focus",
  "drive",
  "pizza",
  "tubing",
  "gif",
  "emoji",
  "ping pong",
  "rock & roll",
  "fidget toy",
  "Coca-Cola",
  "laptop",
  "coffee",
  "bowling",
  "video games",
  "board games",
  "cheese and whine",
  "meetings",
  "beer",
  "pretzels",
  "rubber duck",
  "agile",
  "nerf war",
  "sarvis",
  "serves",
  "sarves",
  "starfish",
  "serve",
  "surves",
  "lord of the mini coop",
  "rainbows",
  "pride",
  "thread",
  "in the work",
  "disruptor",
  "powershell all the things",
  "works on my local",
  "agency of the future",
  "chunky staffing",
  "akward teenage stage",
  "need moar coffee",
  "crawl",
  "walk",
  "run",
  "fireside chat",
  "headphones",
  "hotlist",
  "war room",
  "punchline",
  "internet outage",
  "what's the ask",
  "Hasselhoff",
  "are you on mute",
  "Skype",
  "Teams",
  "Slack",
  "Yammer",
  "low hanging fruit",
  "hoteling",
  "mvp",
  "super simple",
  "operations",
  "Robin Reviews",
  "Starbucks",
  "pourcast",
  "sipping time",
  "science fair",
  "you're not sharing your screen",
  "please submit your timesheet",
  "quick wins",
  "lift and shift",
  "cold brew",
  "make it pop",
  "wi-fi",
  "out of scope",
  "anchorman",
  "baywatch",
  "dukes of hazard",
  "stranger things",
  "the blindside",
  "dagobah",
  "death star",
  "jackson hole",
  "loon",
  "mos eisley",
  "okemo",
  "stowe",
  "sugarbush",
  "sunapee",
  "whistler",
  "dickory",
  "matrix",
  "meenie",
  "miney",
  "moe",
  "the nest",
  "assemble",
  "gather",
  "hunky dory",
  "blackberry",
  "flash",
  "floppy disk",
  "i-frame",
  "my space",
  "palm pilot",
  "zune",
  "copper",
  "abbey road",
  "hyde",
  "motown",
  "smart",
  "stax",
  "studio one",
  "the capital",
  "the dungeon",
  "the lair",
  "amer",
  "city palace",
  "hawa mahal",
  "the cliffs",
  "el porto",
  "san onofre",
  "the wedge",
  "zuma",
  "cathedral",
  "fox",
  "latham square",
  "the port",
  "dragons",
  "magic",
  "quick win",
  "sorry I'm late",
  "thinkpad",
  "snack time",
  "ctrl alt delete",
]
let paragraph = "";

function sentenceLength(){ 
	return Math.floor(Math.random() * (14 - 4) + 4)
};

function getWord(){
	return words[Math.floor(Math.random() * words.length)];
};

function buildSentence(n) {
	let sentence = "";
	let lastWord = "";
	for (var i = 0; i < n; i++) {
		word = getWord();
		if (word == lastWord) {
			word = getWord();
		}
		lastWord = word;
		if (i == 0) {
			word = word.charAt(0).toUpperCase() + word.substr(1);
		}
		sentence += word;
		if(i != n-1){
			sentence += " ";
		}
		else{
			sentence += ".  ";
		}
		console.log(n);
	}
	return sentence;
};

function buildParagraph(q){
	let paragraph = "";
	for (var j = 0; j < q; j++) {
		paragraph += buildSentence(sentenceLength());
	}
	return paragraph;
};

function lorem(){
	var node = document.createElement("P");
	var textnode = buildParagraph(10);
	console.log(node, textnode);
	node.innerHTML = textnode;
	console.log(node);
	var loremContent = document.getElementById("loremContent");
	loremContent.appendChild(node);

};

function helpText(txt){
	let help = document.getElementById("helper");
	help.innerHTML = txt;
	help.classList.remove("hide");
	setTimeout(function(){ help.classList.add("hide"); }, 400);
}

function copy(){
  	var range = document.createRange();
        range.selectNode(document.getElementById("loremContent"));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        helpText("COPIED");
};

function clear(){
	document.getElementById("loremContent").innerHTML = "";
}

document.getElementById("ipsum").addEventListener("click", lorem);
document.getElementById("copy").addEventListener("click", copy);
document.getElementById("clear").addEventListener("click", clear);