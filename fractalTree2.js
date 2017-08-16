var branches=[];
var locX;
var locY;
var canvas;
var dist;
var i = 40;
var j=0;
var theta=0;
var slider;
var x;
var alpha;

function setup()
{
	canvas = createCanvas(1000,1000);
	canvas.position(100,100);
	background(0);
	locX=width/2;
	locY=height-40;
	dist = 40;
	slider = createSlider(0,100,50);
	slider.position(100,600);
}

/*function Branch2()
{
	translate(locX,locY);
	rotate(theta);
	createP(locX+ "      "+locY);
	stroke(255);
	strokeWeight(4);
	line(0,0,0,-i);
	rotate(-theta);
	rotate(theta-Math.PI/2);
	line(0,0,0,-i);
//	line(0,0,10,10);
	//locX=0;
	locX= locX + i*Math.sin(theta);
	locY= locY - i*Math.cos(theta);
	theta+=Math.PI/4;
//	theta=slider.value();

//	translate(0,locY);
	
	i*=0.8;
}*/

function Branch(x, alpha)
{
	x *=0.8;
	if(x>15)
	{
		stroke(255);
		strokeWeight(4);
		translate(locX,locY);
		rotate(alpha);
		line(0,0,0,-x);
		Branch(x, alpha);
		rotate(-alpha);
		rotate(alpha-Math.PI/2);
		line(0,0,0,-x);
		Branch(x,-alpha);
		locX= locX + x*Math.sin(alpha);
		locY= locY - x*Math.cos(alpha);
		alpha+=Math.PI/4;
	}
	createP(locX+ "   " +locY);
}

function mousePressed()
{

	Branch(40,Math.PI/4);
	/*
	translate(locX,locY);
	rotate(theta);
	createP(locX+ "      "+locY);
	stroke(255);
	strokeWeight(4);
	line(0,0,0,-i);
	rotate(-theta);
	rotate(theta-Math.PI/2);
	line(0,0,0,-i);
//	line(0,0,10,10);
	//locX=0;
	locX= locX + i*Math.sin(theta);
	locY= locY - i*Math.cos(theta);
	theta+=Math.PI/4;
//	theta=slider.value();

//	translate(0,locY);
	
	i*=0.8;
	*/
}

function draw()
{
	//
	Branch(40,Math.PI/4);
}