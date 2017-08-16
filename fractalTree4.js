var angle;
var angle2;
var canvas;
var slider;
var level;
function setup()
{
	canvas = createCanvas(1000,1000);
	canvas.position(100,100);
	background(0);
	slider = createSlider(0,2*Math.PI,0.186,0.001);
	slider.position(100,500);
}
function mousePressed()
{
	createP(slider.value());
}
function draw()
{
	background(0);
	level=0;
	translate(width/2,height);
	stroke(255);
	strokeWeight(4);
	branch(150,4);
	angle = slider.value();
	angle2 = angle*3.4;

}

function branch(en,wt)
{
	level++;

	if(level>1)
	{

		line(0,0,0,-en);
		//ellipse(0,-en/2,5,en);
		translate(0,-en);
		//stroke(random(255),random(255),random(255));
		strokeWeight(wt);
		if(en>10)
		{
			push();
			rotate(angle*0.9);
			branch(random(0.45,0.55)*en,wt*0.75);
			pop();
		}
		if(en>20)
		{
			push();
			rotate(angle*1.5);
			branch(random(0.68,0.72)*en,wt*0.75);
			pop();
			push();slider.value()
			rotate(angle*2.7);
			branch(random(0.78,0.85)*en,0.67*wt);
			pop();
		}
	}
	else
	{
		line(0,0,0,-en);
		//ellipse(0,-en/2,5,en);
		translate(0,-en);
		//stroke(random(255),random(255),random(255));
		strokeWeight(wt*0.8);
		if(en>10)
		{
			push();
			rotate(angle*1.067);
			branch(0.67*en,wt*0.75);
			pop();
			push();slider.value()
			rotate(angle2);
			branch(0.8*en,0.67*wt);
			pop();
		}
	}

	/*	else
	{
		fill(255,0,0);
		noStroke();
		ellipse(0,0,1,1,50);
	}
*/
}