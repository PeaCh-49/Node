const http  = require('http');
require('./config');

const server = http.createServer( (req,res) => { 
	const url = req.url;
	const method = req.method;

	if (url === '/'){
		res.write("<head>");

			res.write("<title>");
				res.write("My Page");
			res.write("</title>");

			res.write("<link rel='stylesheet' src='./styles.css'/>");

		res.write("</head>");
		res.write("<body>");
			res.write("<h1>HOWEVER</h1>");
			res.write("<p>");
				res.write("Note that the only valid version of the GPL as far as this project ");
				res.write("<br>");
				res.write("is concerned is _this_ particular version of the license (ie v2, not ");
				res.write("<br>");
				res.write("v2.2 or v3.x or whatever), unless explicitly otherwise stated. ");
				res.write("<br>");
				res.write("<br>");
				res.write("HOWEVER, in order to allow a migration to GPLv3 if that seems like ");
				res.write("<br>");
				res.write("a good idea, I also ask that people involved with the project make ");
				res.write("<br>");
				res.write("their preferences known. In particular, if you trust me to make that ");
				res.write("<br>");
				res.write("decision, you might note so in your copyright message, ie something ");					
				res.write("<br>");
				res.write("like");
				res.write("<br>");
				res.write("	This file is licensed under the GPL v2, or a later version ");
				res.write("<br>");
				res.write("<br>");
				res.write("might avoid issues. But we can also just decide to synchronize and ");
				res.write("<br>");
				res.write("contact all copyright holders on record ifwhen the occasion arises. ");
				res.write("<br>");
				res.write("<br>");
			res.write("</p>");
     	    res.write("<h4>Linus Torvalds</h4>");

		res.write("<button href='#/login'>LOGIN</button>");	
		res.write("</body>");

	} else if (url === '/login'){
		res.write("<h1>Login</h1>");
		res.write("<h1>Login</h1>");
	    res.write("<h1>Login</h1>");
		res.write("<h1>Login</h1>");

	}   

	res.end();
});

server.listen(process.env.PORT);
