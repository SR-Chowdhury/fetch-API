# Fetch API

**Using this webpack-boilerplate do the following task** 

_run:_

	npm install
	
_finally run:_
	
	npm start

**Here we go. You are ready to go.**


# Behind the Scene of fetch API

**What is Async Task?**

**What is promise?**

**What is Fetch API**


# _What is Async Task_

	console.log("I am number One"); // 1st

	setTimeout(() => {
	    console.log("I am number two"); // 4th
	}, 2000);

	console.log("I am number Three"); // 2nd

	setTimeout(() => {
	    console.log("I am number Four"); // 3rd
	}, 1000);

**Output: I am number One -> Three -> Four -> Two**

**This is call Async task** 


# _What is Promise_

_[ N.B. Promise is added in ES6 for using Async task smothly ]_

	let p1 = new Promise((resolve, reject) => {

	    let x = "SuperStar World";
	    setTimeout(() => {
		resolve(x);        
	    }, 5000);

	});

	let p2 = new Promise((resolve, reject) => {

	    let x = "Explore ";
	    setTimeout(() => {
		resolve(x);        
	    }, 3000);

	}); // p2 will show first than after 3seconds p1 will show

	p1.then((resolve_parameter) => { console.log(resolve_parameter); });
	p1.catch((reject_err) => { console.log(reject_err); });

	p2.then((resolve_parameter) => { console.log(resolve_parameter); });
	p2.catch((reject_err) => { console.log(reject_err); });


**[ Another Example ]**

	function getPromise(isAllow) {

	    return new Promise((resolve, reject) => {

		setTimeout(() => {
		    if(isAllow) {
			resolve('Welcome in our team.');
		    }
		    else {
			reject(new Error('Soory. you are failed'));
		    }
		}, 5000);

	    });

	}
	getPromise(true)
	    .then((res) => {
		console.log(res);
	    })
	    .catch((rej) => {
		console.log(rej.message);
	    });
	    
