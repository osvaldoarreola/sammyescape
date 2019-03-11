a = document.getElementById("tan");
b = document.getElementById("kyl");
c = document.getElementById("car");
d = document.getElementById("ken");

function secondImage(el){
	if (el.src.match("image/butter.png")){
		el.src = "image/kenny.png";
	} else if (el.src.match("image/kenny.png")){
		el.src = "image/towl.png";
	} else if (el.src.match("image/towl.png")){
		el.src = "image/kyle.png";
	} else if (el.src.match("image/kyle.png")){
		el.src = "image/butter.png";
	} else {
	}
}

function thirdImage(el){
	if (el.src.match("image/token.png")){
		el.src = "image/kenny.png";
	} else if (el.src.match("image/kenny.png")){
		el.src = "image/bill.png";
	} else if (el.src.match("image/bill.png")){
		el.src = "image/tweek.png";
	} else if (el.src.match("image/tweek.png")){
		el.src = "image/token.png";
	} else {
	}
}

function oneImage(el){
	if (el.src.match("image/jimmy.png")){
		el.src = "image/chef.png";
	} else if (el.src.match("image/chef.png")){
		el.src = "image/key.png";
	} else if (el.src.match("image/key.png")){
		el.src = "image/stan.png";
	}else if (el.src.match("image/stan.png")){
		el.src = "image/jimmy.png";
	} else {
	}
}

function forImage(el){
	if (el.src.match("image/kenny.png")){
		el.src = "image/pip.png";
	} else if (el.src.match("image/pip.png")){
		el.src = "image/token.png";
	} else if (el.src.match("image/token.png")){
		el.src = "image/stan.png";
	}else if (el.src.match("image/stan.png")){
		el.src = "image/kenny.png";
	} else {
	}
}

function fiveImage(el){
	if (el.src.match("image/tweek.png")){
		el.src = "image/craig.png";
	} else if (el.src.match("image/craig.png")){
		el.src = "image/clyde.png";
	} else if (el.src.match("image/clyde.png")){
		el.src = "image/kenny.png";
	}else if (el.src.match("image/kenny.png")){
		el.src = "image/tweek.png";
	} else {
	}
}

function sixImage(el){
	if (el.src.match("image/craig.png")){
		el.src = "image/kyle.png";
	} else if (el.src.match("image/kyle.png")){
		el.src = "image/jimmy.png";
	} else if (el.src.match("image/jimmy.png")){
		el.src = "image/boyz.png";
	}else if (el.src.match("image/boyz.png")){
		el.src = "image/craig.png";
	} else {
	}
}

function sevenImage(el){
	if (el.src.match("image/kyle.png")){
		el.src = "image/token.png";
	} else if (el.src.match("image/token.png")){
		el.src = "image/randy.png";
	} else if (el.src.match("image/randy.png")){
		el.src = "image/timmy.png";
	}else if (el.src.match("image/timmy.png")){
		el.src = "image/kyle.png";
	} else {
	}
}

function eImage(el){
	if (el.src.match("image/stan.png")){
		el.src = "image/cartman.png";
	} else if (el.src.match("image/cartman.png")){
		el.src = "image/clyde.png";
	} else if (el.src.match("image/clyde.png")){
		el.src = "image/kenny.png";
	}else if (el.src.match("image/kenny.png")){
		el.src = "image/stan.png";
	} else {
	}
}

function nineImage(el){
	if (el.src.match("image/cartman.png")){
		el.src = "image/scott.png";
	} else if (el.src.match("image/scott.png")){
		el.src = "image/ike.png";
	} else if (el.src.match("image/ike.png")){
		el.src = "image/kenny.png";
	}else if (el.src.match("image/kenny.png")){
		el.src = "image/cartman.png";
	} else {
	}
}

function checkConfiguration(el){
	if(a.src.match("image/stan.png") && b.src.match("image/kyle.png") && c.src.match("image/cartman.png") && d.src.match("image/kenny.png")){
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");
		d.classList.add("opaque");
		document.getElementById("clyde").classList.add("display");
		document.getElementById("ball").classList.remove("display");
		console.log("YOU WIN!");
	} else {
		
	}
}

