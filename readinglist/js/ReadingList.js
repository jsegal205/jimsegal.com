//ReadingList
;(function($){
	var fourteen = [
		{
			"title": "The Lean Startup", 
			"author": "Eric Ries", 
			"link": "http://www.amazon.com/Lean-Startup-Innovation-Successful-Businesses-ebook/dp/B004J4XGN6/"
		},
		{
			"title": "The Maze runner", 
			"author": "James Dashner", 
			"link": "http://www.amazon.com/Maze-Runner-James-Dashner-ebook/dp/B002QE3CTY/"
		}, 
		{
			"title": "The Martian", 
			"author": "Andy Weir", 
			"link": "http://www.amazon.com/Martian-Andy-Weir-ebook/dp/B00EMXBDMA/"
		}, 
		{
			"title": "Ready Player One", 
			"author": "Ernest Cline", 
			"link": "http://www.amazon.com/Ready-Player-One-Ernest-Cline-ebook/dp/B004J4WKUQ/"
		}, 
		{
			"title": "Hyperion", 
			"author": "Dan Simmons", 
			"link": "http://www.amazon.com/Hyperion-Cantos-Book-1-ebook/dp/B004G60EHS/"
		}, 
		{
			"title": "Effective Programming: More that just Writing Code", 
			"author": "Jeff Atwood", 
			"link": "http://www.amazon.com/Effective-Programming-More-Than-Writing-ebook/dp/B008HUMTO0/"
		}
		];
	var thirteen = [
		{
			"title": "The Design of Everyday Things", 
			"author": "Donald Norman", 
			"link": "http://www.amazon.com/Design-Everyday-Things-Donald-Norman/dp/0465067107/"
		}, 
		{
			"title": "Rework", 
			"author": "Jason Fried and David Heinemeier Hansson", 
			"link": "http://www.amazon.com/ReWork-Change-Way-Work-Forever-ebook/dp/B002MUAJ2A/"
		}, 
		{
			"title": "First World Problems: 101 reasons Why the Terrorists Hate Us", 
			"author": "Ben Nesvig", 
			"link": "http://www.amazon.com/First-World-Problems-Reasons-Terrorists-ebook/dp/B006OGG4D6/"
		}, 
		{
			"title": "Fool Moon", 
			"author": "Jim Butcher", 
			"link": "http://www.amazon.com/Fool-Moon-Dresden-Files-Book-ebook/dp/B001BPYD2O/"
		}, 
		{
			"title": "Storm Front", 
			"author": "Jim Butcher", 
			"link": "http://www.amazon.com/Storm-Front-Dresden-Files-Book-ebook/dp/B000WH7PLS/"
		}, 
		{
			"title": "Foundation and Empire", 
			"author": "Isaac Asimov", 
			"link": "http://www.amazon.com/Foundation-Empire-Isaac-Asimov-ebook/dp/B000FC1PWK/"
		}];
	var twelve = [
		{
			"title": "Foundation", 
			"author": "Isaac Asimov", 
			"link": "http://www.amazon.com/Foundation-Isaac-Asimov-ebook/dp/B000FC1PWA/"
		}, 
		{
			"title": "Lost at Sea", 
			"author": "Jon Ronsom", 
			"link": "http://www.amazon.com/Lost-Sea-Jon-Ronson-Mysteries-ebook/dp/B008MG1GAW/"
		}, 
		{
			"title": "Abraham Lincoln Vampire Hunter", 
			"author": "Seth Grahame-Smith", 
			"link": "http://www.amazon.com/Abraham-Lincoln-Vampire-Hunter-first/dp/B0088UM9OO/"
		}, 
		{
			"title": "The Last Olympian", 
			"author": "Rick Riordan", 
			"link": "http://www.amazon.com/Percy-Jackson-Last-Olympian-Riordan-ebook/dp/B00280LYHS/"
		}, 
		{
			"title": "The Battle of the Labyrinth", 
			"author": "Rick Riordan", 
			"link": "http://www.amazon.com/Percy-Jackson-Battle-Labyrinth-Olympians-ebook/dp/B00280LYIM/"
		}, 
		{
			"title": "The Titan's Curse", 
			"author": "Rick Riordan", 
			"link": "http://www.amazon.com/Percy-Jackson-Titans-Curse-Riordan-ebook/dp/B00280LYI2/"
		}, 
		{
			"title": "The Sea of Monsters", 
			"author": "Rick Riordan", 
			"link": "http://www.amazon.com/Percy-Jackson-Monsters-Rick-Riordan-ebook/dp/B00280LYHI/"
		},
		{
			"title": "The Lightning Thief", 
			"author": "Rick Riordan", 
			"link": "http://www.amazon.com/Percy-Jackson-Lightning-Thief-Olympians-ebook/dp/B00280LYIC/"
		}, 
		{
			"title": "Screwjack", 
			"author": "Hunter S. Thompson", 
			"link": "http://www.amazon.com/Screwjack-Short-Hunter-S-Thompson-ebook/dp/B000FC0TVI/"
		}, 
		{
			"title": "The Art of Unit Testing", 
			"author": "Roy Osherove", 
			"link": "http://www.amazon.com/Art-Unit-Testing-Examples-Net/dp/1933988274/"
		}, 
		{
			"title": "Mockingjay", 
			"author": "Suzanne Collins", 
			"link": "http://www.amazon.com/Mockingjay-Hunger-Games-Book-Trilogy-ebook/dp/B003XF1XOQ/"
		}, 
		{
			"title": "Catching Fire", 
			"author": "Suzanne Collins", 
			"link": "http://www.amazon.com/Catching-Fire-Hunger-Games-Trilogy-ebook/dp/B003O86FMW/"
		},
		{
			"title": "The Hunger Games", 
			"author": "Suzanne Collins", 
			"link": "http://www.amazon.com/Hunger-Games-Book-Trilogy-ebook/dp/B002MQYOFW/"
		}, 
		{
			"title": "World War Z", 
			"author": "Max Brooks", 
			"link": "http://www.amazon.com/World-War-Z-Max-Brooks-ebook/dp/B000JMKQX0/"
		}];

	var data = { "bookCollection": [
		{
			"year": "2014",
			"books": fourteen
		},
		{
			"year": "2013",
			"books": thirteen
		},
		{
			"year": "2012",
			"books": twelve
		}]
	};

	var loadData = function(data){
	    var template = $('#booktmpl').html();
	    var book = Handlebars.compile(template)(data);
	    $('#books').append(book);
	}

	loadData(data);



})(jQuery);