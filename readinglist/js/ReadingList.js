//ReadingList
;(function($){
	var seventeen = [
    {
			"title": "Artemis - Audiobook",
			"author": "Andy Weir",
			"link": "https://www.audible.com/pd/Sci-Fi-Fantasy/Artemis-Audiobook/B072R1CY4P",
		},
    {
			"title": "Old Man's War - Audiobook",
			"author": "John Scalzi",
			"link": "https://www.audible.com/pd/Old-Mans-War-Part-1-Audiobook/B002V1O7D2",
		},
    {
			"title": "Dungeon Madness: Divine Dungeon Series, Book 1 - Audiobook",
			"author": "Dakota Prout",
			"link": "https://www.audible.com/pd/Dungeon-Madness-Part-1-Divine-Dungeon-Series-Book-2-Audiobook/B0764H7Y83",
		},
    {
			"title": "Waking Gods: The Themis Files, Book 2 - Audiobook",
			"author": "Sylvain Neuvel",
			"link": "https://www.audible.com/pd/Waking-Gods-The-Themis-Files-Book-2-Audiobook/B01NGUBLBW",
		},
    {
			"title": "Sleeping Giants: The Themis Files, Book 1 - Audiobook",
			"author": "Sylvain Neuvel",
			"link": "https://www.audible.com/pd/Fiction/Sleeping-Giants-Audiobook/B01A98UKAC",
		},
    {
			"title": "Dungeon Born: Divine Dungeon Series, Book 1 - Audiobook",
			"author": "Dakota Prout",
			"link": "https://www.audible.com/pd/Sci-Fi-Fantasy/Dungeon-Born-Audiobook/B06XQ78XLP",
		},
    {
			"title": "All These Worlds: Bobiverse, Book 3 - Audiobook",
			"author": "Dennis E. Taylor",
			"link": "https://www.audible.com/pd/Sci-Fi-Fantasy/All-These-Worlds-Audiobook/B07341FZDC",
		},
    {
			"title": "For We Are Many: Bobiverse, Book 2 - Audiobook",
			"author": "Dennis E. Taylor",
			"link": "https://www.audible.com/pd/Sci-Fi-Fantasy/For-We-Are-Many-Audiobook/B01N17THEO",
		},
    {
			"title": "We Are Legion (We Are Bob): Bobiverse, Book 1 - Audiobook",
			"author": "Dennis E. Taylor",
			"link": "https://www.audible.com/pd/Sci-Fi-Fantasy/We-Are-Legion-We-Are-Bob-Audiobook/B01L082HJ2",
		},
		{
			"title": "Neverwhere - Audiobook",
			"author": "Neil Gaiman",
			"link": "https://www.audible.com/pd/Sci-Fi-Fantasy/Neverwhere-Audiobook/B00354ZSS2",
		},
		{
			"title": "American Gods - Audiobook",
			"author": "Neil Gaiman",
			"link": "https://www.audible.com/pd/Sci-Fi-Fantasy/American-Gods-The-Tenth-Anniversary-Edition-A-Full-Cast-Production-Audiobook/B0055274U2",
		},
		{
			"title": "The Story of God: A Biblical Comedy about Love (and Hate) - Audiobook",
			"author": "Chris Matheson",
			"link": "https://www.audible.com/pd/The-Story-of-God-A-Biblical-Comedy-about-Love-and-Hate-Audiobook/B017T4ZYR8",
		},
		{
			"title": "Eragon: The Inheritance Cycle, Book 4 - Audiobook",
			"author": "Christopher Paolini",
			"link": "https://www.audible.com/pd/Inheritance-Part-1-The-Inheritance-Cycle-Book-4-Audiobook/B005ZWA2P6",
		},
		{
			"title": "Eragon: The Inheritance Cycle, Book 3 - Audiobook",
			"author": "Christopher Paolini",
			"link": "https://www.audible.com/pd/Brisingr-Part-1-The-Inheritance-Cycle-Book-3-Audiobook/B002V0A444",
		},
		{
			"title": "Eragon: The Inheritance Cycle, Book 2 - Audiobook",
			"author": "Christopher Paolini",
			"link": "https://www.audible.com/pd/Eldest-The-Inheritance-Cycle-Book-2-Part-1-Audiobook/B003WVNWU4",
		},
		{
			"title": "Eragon: The Inheritance Cycle, Book 1 - Audiobook",
			"author": "Christopher Paolini",
			"link": "https://www.audible.com/pd/Sci-Fi-Fantasy/Eragon-Audiobook/B002UZKL7A",
		},
	];
	var sixteen = [
		{
			"title": "Harry Potter and the Deathly Hallows, Book 7 - Audiobook",
			"author": "J.K. Rowling",
			"link": "http://www.audible.com/pd/Kids/Harry-Potter-and-the-Deathly-Hallows-Book-7-Audiobook/B017WJ5ZK6/",
		},
		{
			"title": "Harry Potter and the Half-Blood Prince, Book 6 - Audiobook",
			"author": "J.K. Rowling",
			"link": "http://www.audible.com/pd/Kids/Harry-Potter-and-the-Half-Blood-Prince-Book-6-Audiobook/B017V4NOZ0/",
		},
		{
			"title": "Harry Potter and the Order of the Phoenix, Book 5 - Audiobook",
			"author": "J.K. Rowling",
			"link": "http://www.audible.com/pd/Kids/Harry-Potter-and-the-Order-of-the-Phoenix-Book-5-Audiobook/B017V4NMX4/",
		},
		{
			"title": "Harry Potter and the Goblet of Fire, Book 4 - Audiobook",
			"author": "J.K. Rowling",
			"link": "http://www.audible.com/pd/Kids/Harry-Potter-and-the-Goblet-of-Fire-Book-4-Audiobook/B017V4NUPO/",
		},
		{
			"title": "Harry Potter and the Prisoner of Azkaban, Book 3 - Audiobook",
			"author": "J.K. Rowling",
			"link": "http://www.audible.com/pd/Kids/Harry-Potter-and-the-Prisoner-of-Azkaban-Book-3-Audiobook/B017V4JA2Q/",
		},
		{
			"title": "Harry Potter and the Chamber of Secrets, Book 2 - Audiobook",
			"author": "J.K. Rowling",
			"link": "http://www.audible.com/pd/Kids/Harry-Potter-and-the-Chamber-of-Secrets-Book-2-Audiobook/B017V4IWVG/",
		},
		{
			"title": "Harry Potter and the Sorcerer's Stone, Book 1 - Audiobook",
			"author": "J.K. Rowling",
			"link": "http://www.audible.com/pd/Kids/Harry-Potter-and-the-Sorcerers-Stone-Book-1-Audiobook/B017V4IM1G/",
		},
	];
	var fourteen = [
		{
			"title": "The Lean Startup",
			"author": "Eric Ries",
			"link": "http://www.amazon.com/Lean-Startup-Innovation-Successful-Businesses-ebook/dp/B004J4XGN6/",
		},
		{
			"title": "The Maze runner",
			"author": "James Dashner",
			"link": "http://www.amazon.com/Maze-Runner-James-Dashner-ebook/dp/B002QE3CTY/",
		},
		{
			"title": "The Martian",
			"author": "Andy Weir",
			"link": "http://www.amazon.com/Martian-Andy-Weir-ebook/dp/B00EMXBDMA/",
		},
		{
			"title": "Ready Player One",
			"author": "Ernest Cline",
			"link": "http://www.amazon.com/Ready-Player-One-Ernest-Cline-ebook/dp/B004J4WKUQ/",
		},
		{
			"title": "Hyperion",
			"author": "Dan Simmons",
			"link": "http://www.amazon.com/Hyperion-Cantos-Book-1-ebook/dp/B004G60EHS/",
		},
		{
			"title": "Effective Programming: More that just Writing Code",
			"author": "Jeff Atwood",
			"link": "http://www.amazon.com/Effective-Programming-More-Than-Writing-ebook/dp/B008HUMTO0/",
		},
	];
	var thirteen = [
		{
			"title": "The Design of Everyday Things",
			"author": "Donald Norman",
			"link": "http://www.amazon.com/Design-Everyday-Things-Donald-Norman/dp/0465067107/",
		},
		{
			"title": "Rework",
			"author": "Jason Fried and David Heinemeier Hansson",
			"link": "http://www.amazon.com/ReWork-Change-Way-Work-Forever-ebook/dp/B002MUAJ2A/",
		},
		{
			"title": "First World Problems: 101 reasons Why the Terrorists Hate Us",
			"author": "Ben Nesvig",
			"link": "http://www.amazon.com/First-World-Problems-Reasons-Terrorists-ebook/dp/B006OGG4D6/",
		},
		{
			"title": "Fool Moon",
			"author": "Jim Butcher",
			"link": "http://www.amazon.com/Fool-Moon-Dresden-Files-Book-ebook/dp/B001BPYD2O/",
		},
		{
			"title": "Storm Front",
			"author": "Jim Butcher",
			"link": "http://www.amazon.com/Storm-Front-Dresden-Files-Book-ebook/dp/B000WH7PLS/",
		},
		{
			"title": "Foundation and Empire",
			"author": "Isaac Asimov",
			"link": "http://www.amazon.com/Foundation-Empire-Isaac-Asimov-ebook/dp/B000FC1PWK/",
		},
	];
	var twelve = [
		{
			"title": "Foundation",
			"author": "Isaac Asimov",
			"link": "http://www.amazon.com/Foundation-Isaac-Asimov-ebook/dp/B000FC1PWA/",
		},
		{
			"title": "Lost at Sea",
			"author": "Jon Ronsom",
			"link": "http://www.amazon.com/Lost-Sea-Jon-Ronson-Mysteries-ebook/dp/B008MG1GAW/",
		},
		{
			"title": "Abraham Lincoln Vampire Hunter",
			"author": "Seth Grahame-Smith",
			"link": "http://www.amazon.com/Abraham-Lincoln-Vampire-Hunter-first/dp/B0088UM9OO/",
		},
		{
			"title": "The Last Olympian",
			"author": "Rick Riordan",
			"link": "http://www.amazon.com/Percy-Jackson-Last-Olympian-Riordan-ebook/dp/B00280LYHS/",
		},
		{
			"title": "The Battle of the Labyrinth",
			"author": "Rick Riordan",
			"link": "http://www.amazon.com/Percy-Jackson-Battle-Labyrinth-Olympians-ebook/dp/B00280LYIM/",
		},
		{
			"title": "The Titan's Curse",
			"author": "Rick Riordan",
			"link": "http://www.amazon.com/Percy-Jackson-Titans-Curse-Riordan-ebook/dp/B00280LYI2/",
		},
		{
			"title": "The Sea of Monsters",
			"author": "Rick Riordan",
			"link": "http://www.amazon.com/Percy-Jackson-Monsters-Rick-Riordan-ebook/dp/B00280LYHI/",
		},
		{
			"title": "The Lightning Thief",
			"author": "Rick Riordan",
			"link": "http://www.amazon.com/Percy-Jackson-Lightning-Thief-Olympians-ebook/dp/B00280LYIC/",
		},
		{
			"title": "Screwjack",
			"author": "Hunter S. Thompson",
			"link": "http://www.amazon.com/Screwjack-Short-Hunter-S-Thompson-ebook/dp/B000FC0TVI/",
		},
		{
			"title": "The Art of Unit Testing",
			"author": "Roy Osherove",
			"link": "http://www.amazon.com/Art-Unit-Testing-Examples-Net/dp/1933988274/",
		},
		{
			"title": "Mockingjay",
			"author": "Suzanne Collins",
			"link": "http://www.amazon.com/Mockingjay-Hunger-Games-Book-Trilogy-ebook/dp/B003XF1XOQ/",
		},
		{
			"title": "Catching Fire",
			"author": "Suzanne Collins",
			"link": "http://www.amazon.com/Catching-Fire-Hunger-Games-Trilogy-ebook/dp/B003O86FMW/",
		},
		{
			"title": "The Hunger Games",
			"author": "Suzanne Collins",
			"link": "http://www.amazon.com/Hunger-Games-Book-Trilogy-ebook/dp/B002MQYOFW/",
		},
		{
			"title": "World War Z",
			"author": "Max Brooks",
			"link": "http://www.amazon.com/World-War-Z-Max-Brooks-ebook/dp/B000JMKQX0/",
		},
	];

	var data = { bookCollection: [
		{
			year: 2017,
			books: seventeen,
		},
		{
			year: 2016,
			books: sixteen,
		},
		{
			year: 2014,
			books: fourteen,
		},
		{
			year: 2013,
			books: thirteen,
		},
		{
			year: 2012,
			books: twelve,
		}],
	};

	var loadData = function(data){
	  var template = $('#booktmpl').html();
	  var book = Handlebars.compile(template)(data);
	  $('#books').append(book);
	}

	loadData(data);
})(jQuery);
