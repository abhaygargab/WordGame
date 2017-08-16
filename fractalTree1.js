var angle;
var angle2;
var canvas;
var slider;
function setup()
{
	canvas = createCanvas(1000,1000);
	canvas.position(100,100);
	background(0);
	slider = createSlider(0,2*Math.PI,Math.PI,0.01);
	slider.position(100,500);
}

function draw()
{
	background(255);
	translate(width/2,height);
	stroke(0);
	strokeWeight(2);
	branch(150,4);
	angle = slider.value();
	angle2 = angle*1.067;
}

function branch(en,wt)
{
	//line(0,0,0,-en);
	fill(0);
	ellipse(0,-en/2,5,en);
	translate(0,-en);
	//stroke(random(255),random(255),random(255));
	strokeWeight(wt);
	if(en>20)
	{
		push();
		rotate(angle);
		branch(0.8*en,wt*0.67);
		pop();
		push();
		rotate(angle2);
		branch(0.7*en,wt*0.50);
		pop();
		push();
		rotate(-angle2);
		branch(0.53*en,wt*0.50);
		pop();
		push();
		rotate(-angle);
		branch(0.67*en,0.67*wt);
		pop();
	}
	else
	{
		fill(0,255,0);
		noStroke();
		ellipse(0,0,8,8,50);
	}

}