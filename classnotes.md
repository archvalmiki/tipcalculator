##Class Notes
https://developer.mozilla.org/en-US/docs/Web/JavaScript
(Google Search: "MDN Javascript")

Tools we are going to use:
	- VS Code
	- Online Editors
		- JS Bin
		- Plnkr
	- Github (create an acct if you don't have one)
		- remember your username

	- This is my addition :)

	- Static vs Dynamic
		- Static: existing files are sent to the user
			those files are rendered in the 
			user's browser.
		- Dynamic: based on request, content is created
			on the fly on server side (by running
			some code) and then sent to the user
			where the browser renders that content.
	- Life vs Death.


Javascript <> HTML DOM toolbox

document.getElementById
p.innerHTML
firstChild
nodeValue
write
writeln


Event Handlers
window.onload()

Git (protocol)   vs    Github (cloud provider for storing git repos)

Git Continuous Deployment pipeline to Netlify
	- Netlify is hooked up into your Github Repo
	- Anytime you push changes to the master branch	
	- It picks up those changes and publishes them

Pass by value vs Pass by reference
var x = 10;
var y = [2,4,6];
var z = {name:"Joe Smith", age:10};  z.age
var a = z;
var b = x;

Challenge: 
	- create a new object with following properties:  name "John Smith",  age = 55,  
	- console log: print out the name and the age

	- create a variable called x33 which points to the above object
	- console log  on x33.name
	- add a function inside your object called "greet", which prints out "John Smith - 55"

Errors and Exceptions:
	- creating custom errors
	- handling errors that are ocurring


