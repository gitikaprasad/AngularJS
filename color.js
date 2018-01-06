var r;
var g;
var b;
var p;
var n=6;
var colors=generaterandomcolors(n);
var boxes=document.querySelectorAll(".box");
var easy=document.querySelector("#easy");
var med=document.querySelector("#med");
var hard=document.querySelector("#hard");
var max=9;

var button=document.querySelector("#button1");
//set hard option by default
med.classList.add("selected");

//if easy button clicked
easy.addEventListener("click",function(){
	//set no of random colors to 3
	n=3;
	reset();
	hard.classList.remove("selected");
	med.classList.remove("selected");
	easy.classList.add("selected");
	for(i=n;i<max;i++)
	{
		boxes[i].style.backgroundColor="#232323";
	}
});


//if medium button clicked

med.addEventListener("click",function(){
	//set no of random colors to 6
	n=6;
	reset();
	med.classList.add("selected");
	easy.classList.remove("selected");
	hard.classList.remove("selected");
	for(i=n;i<max;i++)
	{
		boxes[i].style.backgroundColor="#232323";
	}
});



//if hard button clicked

hard.addEventListener("click",function(){
	//set no of random colors to 9
	n=9;
	reset();
	hard.classList.add("selected");
	easy.classList.remove("selected");
	med.classList.remove("selected");
	for(i=6;i<9;i++)
	{
		addEvent(i);
	}
});

//if new color or try again button clicked reset the colors
button1.addEventListener("click",reset);

//pick random color and set top rgb to pickedcolor
pickedcolor=pickcolor(n);
document.getElementById("colorcode").innerHTML=pickedcolor;


for(i=0;i<n;i++)
{
	boxes[i].style.backgroundColor=colors[i];//initial color to squares
	addEvent(i);
}

function addEvent(i)
{
	boxes[i].addEventListener("click",function(){
		var clickedcolor=this.style.backgroundColor;//grab the color clicked
		if(clickedcolor==pickedcolor)//compare picked color to clicked color
		{
			document.getElementById("message").innerHTML="Correct!";
			document.querySelector("h1").style.backgroundColor=clickedcolor;
			for(i=0;i<n;i++)
			{
				boxes[i].style.backgroundColor=clickedcolor;

			}
			button.innerHTML="Play Again?";
		}
		else
		{
			this.style.backgroundColor="#232323";
			document.getElementById("message").innerHTML="Try Again!";
		}
	});
}

function reset()
{
	//generate n random colors
		colors=generaterandomcolors(n);
	//pick a color
	pickedcolor=pickcolor(n);
	//change top rgb to pickedcolor
	document.getElementById("colorcode").innerHTML=pickedcolor;
	for(i=0;i<n;i++)
	{
		boxes[i].style.backgroundColor=colors[i];
	}
	document.querySelector("h1").style.backgroundColor="#2ECC71";
	document.getElementById("message").innerHTML="";
	button.innerHTML="new color";
}

//generates n number of random colors
function generaterandomcolors(n)
{
	var colorarray=[];
	for(i=0;i<n;i++)
	{
		r=Math.floor(Math.random()*256);
		g=Math.floor(Math.random()*256);
		b=Math.floor(Math.random()*256);
		color="rgb(" + r + "," + g + "," + b + ")";
		colorarray.push(color);
	}
	return(colorarray);
}


//pick a random color
function pickcolor(n)
{
	var color;
	var p=Math.floor(Math.random()*n);
	color=colors[p];
	document.getElementById("dummy").style.backgroundColor=color;
	color=document.getElementById("dummy").style.backgroundColor;
	return(color);
}
