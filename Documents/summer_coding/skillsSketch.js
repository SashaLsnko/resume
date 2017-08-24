

	
///////////////////////////////////COMPUTER///////////////////////////////////////////////////////////


var s = function( p ) {

var x = 100; 
var y = 100;
var a;
var b;
var c;
var ran;

	p.setup = function() {
		p.createCanvas(200,260);
		//p.data.show();
		//compCanvas.parent('compContainer');
		//compCanvas.style("border","1px solid black");
		p.stroke(255,0,0);
		p.loadImage("computer.gif", function(img) {
		p.image(img, -240, -90,700,400);})
		ran=false;
		a=0;
		b=0;
		c=0;

	};

	//p.windowResized=function() {
  	//	resizeCanvas(windowWidth, 500);
	//s};

	p.batons =function(){
		p.noFill();
		for(var j=1; j<3; j++){
			for (var i=0; i<7; i++){
				if(ran){
					a=p.random(255);
					b=p.random(255);
					c=p.random(255);
				}
				else{
					a=0;
					b=0;
					c=0;
				}
				p.stroke(a,b,c);
	  			p.rect(100+i*13, 190+j*15, 9,9,3);
	  		}	
		}
		if(ran){
	    	p.fill(255,255,c);
		}
		else{
			p.fill(255);
			p.noStroke();
		}
	 	p.arc(103, 40, 50, 50, -0.3, p.PI / 2.0 +0.1);
	};


	p.draw = function() {
		p.translate(-80,0);
		if(p.mouseX>0 && p.mouseX<300 && p.mouseY>0 && p.mouseY<260){
			ran =true;
		}
		else{
			ran=false;
		}
		p.batons();
	};
};

	var myp5 = new p5(s,'compContainer');






///////////////////////////////////UTM///////////////////////////////////////////////////////////




var t = function( p ) {

var x = 100; 
var y = 100;
var a;
var b;
var c;
var ran;
var min;




	p.setup = function() {
		p.createCanvas(250,260);
		//p.data.show();
		//compCanvas.parent('compContainer');
		//compCanvas.style("border","1px solid black");
		p.stroke(255,0,0);
		p.loadImage("utm.gif", function(img) {
    	p.image(img, -120, 0,500,400);})
    	//-80, 280,500,400);})
		ran=true;
		a=0;
		b=0;
		c=0;
		min=-100;
	};

	p.changeColor =function (){
		if(ran){
			a=p.random(255);
			b=p.random(255);
			c=p.random(255);
		}
		else{
			a=255;
			b=255;
			c=255;
		}
		p.stroke(a,b,c);
		p.fill(a,b,c);
	};

	p.utmEllipses = function(){
		p.changeColor();
		p.ellipse(49,153,5,5);
		p.changeColor();
		p.ellipse(143,98,5,5);
		p.changeColor();
		p.ellipse(165,126,5,5);
		p.changeColor();
		p.ellipse(88,210,5,5);
		p.changeColor();
		p.ellipse(201,71,5,5);
		p.changeColor();
		p.ellipse(104,142,5,5);
		p.changeColor();
		p.ellipse(115,195,5,5);
		p.changeColor();
		p.ellipse(242,76,5,5);
		p.changeColor();
		p.ellipse(163,153,5,5);
		p.changeColor();
		p.ellipse(70,168,5,5);
		p.changeColor();
		p.ellipse(164,72,5,5);
		p.changeColor();
		p.ellipse(203,113,5,5);
		p.changeColor();
		p.ellipse(226,50,5,5);
		p.changeColor();
		p.ellipse(220,82,5,5);
		p.changeColor();
		p.ellipse(125,111,5,5);
		p.changeColor();
		p.ellipse(117,169,5,5);
		p.changeColor();
		p.ellipse(68,196,5,5);




	};

	


	p.draw = function() {
		p.translate(-40,0);
		
		if(p.mouseX>0 && p.mouseX<300 && p.mouseY>0 && p.mouseY<260){
			ran =true;
		}
		else{
			ran=false;
		}
		p.utmEllipses();
		p.fill(0);
		/*
		p.textSize(20);
		p.noStroke();
		p.text(p.mouseX,p.mouseX+30,p.mouseY);
		p.text(p.mouseY,p.mouseX+30,p.mouseY+30);
		*/
	};
};

	new p5(t,'utmContainer');








///////////////////////////////////CALCULATOR///////////////////////////////////////////////////////////



var j = function( p ) {

var x = 100; 
var y = 100;
var a;
var b;
var c;
var ran;

	p.setup = function() {
		p.createCanvas(150,160);
		p.stroke(255,0,0);
		p.loadImage("calc.gif", function(img) {
    	p.image(img, -50, -30,300,240);})
    	//759, 760,300,240
		ran=true;
		a=0;
		b=0;
		c=0;
	};

	p.changeColor =function (){
		if(ran){
			a=p.random(255);
			b=p.random(255);
			c=p.random(255);
		}
		else{
			a=0;
			b=0;
			c=0;
		}
		p.stroke(a,b,c);
		
	};


	p.lines =function(){
		p.changeColor();
		p.fill(0);
		var count = 0;
		while (count<40){
			p.changeColor();
			p.line(47+count,96+count,93+count,59+count);
			count+=10;
		}
		count = 0;
		while (count<40){
			p.changeColor();
			p.line(50+count*1.3,87-count,90+count*1.4,123-count);
			count+=10;
		}
		p.noStroke();
		if(!ran){
			a=252;
			b=207; 
			c=236;
		}
		p.fill(a,b,c);
		p.textSize(20);
		p.text(p.char(36),101,50);
		p.text(p.char(36),116,60);
		p.text(p.char(36),131,68);
		
	};

	p.draw = function() {
		p.translate(-25,0);
		if(p.mouseX>0 && p.mouseX<200 && p.mouseY>0 && p.mouseY<160){
			ran =true;
		}
		else{
			ran=false;
		}
		p.lines();
		
	};
};

	new p5(j,'calcContainer');





///////////////////////////////////CN TOWER///////////////////////////////////////////////////////////


var g = function( p ) {

var a;
var b;
var c;
var ran;

	p.setup = function() {
		p.createCanvas(200,380);
		p.stroke(255,0,0);
		p.loadImage("cn.gif", function(img) {
		p.image(img, 30, 0,200,400);})
		ran=false;
		a=0;
		b=0;
		c=0;

	};


	p.changeColor =function (){
		if(ran){
			a=p.random(255);
			b=p.random(255);
			c=p.random(255);
		}
		else{
			a=252;
			b=207; 
			c=236;
		}
		p.stroke(a,b,c,150);
		p.fill(a,b,c,150);
	};


	p.el =function(){
		var eee = p.random(10);
		p.strokeWeight(3);
		p.changeColor();
		p.line(152,96,189,95);
		p.changeColor();
		p.line(137,68,167,46);
		p.changeColor();
		p.line(114,47,125,11);
		p.changeColor();
		p.line(50,96,13,93);
		p.changeColor();
		p.line(80,47,65,14);
		p.changeColor();
		p.line(61,69,29,53);


		

	};
	




	p.draw = function() {
		if(p.mouseX>0 && p.mouseX<200 && p.mouseY>0 && p.mouseY<400){
			ran =true;
		}
		else{
			ran=false;
		}
		
		p.el();
		
	};
};

	new p5(g,'cnContainer');


	






/////////////////////////////////// JUGS ///////////////////////////////////////////////////////////


var g = function( p ) {

var bub;
var bub2;
var bub3;
var creat;

	p.setup = function() {
		p.createCanvas(200,300);
		p.stroke(255,0,0);
		p.loadImage("jugs.gif", function(img) {
		p.image(img, 0, 160,200,180);})
		
		bub=new Bubble(0);
		bub2=new Bubble(1);
		bub3=new Bubble(2);

	};


	// Jitter class
	function Bubble(num) {
	  this.tr = 255;
	  if(num<1){
	  	this.x = p.random(9,45);
	  }
	  else if(num <2){
	  	this.x =p.random(81,118);
	  }
	  else{
	  this.x = p.random(150,192);
	  }
	  this.y = p.random(205,210)+1;
	  this.diameter = p.random(3, 7);
	  this.speed = p.random(1,2);

	  this.move = function() {
	    this.y -= this.speed;
	    this.tr-=p.random(1,5);
	  };

	  this.display = function() {
	  	p.noStroke();
	  	p.fill(252, 207, 236);
	    p.ellipse(this.x, this.y+1, this.diameter+5, this.diameter+5);
	  	p.stroke(p.random(0,100),p.random(0,100),p.random(100,255),this.tr);
	  	p.noFill();
	  	p.strokeWeight(2);
	    p.ellipse(this.x, this.y, this.diameter, this.diameter);

	  }
	};


	p.draw = function() {
		creat=p.random(0,100);
		var num = p.random(0,3);
		if(p.mouseX>0 && p.mouseX<200 && p.mouseY>0 && p.mouseY<400 && creat<5 ){
			if(bub.tr<5 && bub.tr<0){
				bub=new Bubble(num);
			}
			else if(creat<2 && bub2.tr<0){
				bub2= new Bubble(num);
			}
			else if(creat<5 && bub3.tr<0) {
				bub3 = new Bubble(num);
			}
		}
		
		bub.display();
		bub.move();
		bub2.display();
		bub2.move();
		bub3.display();
		bub3.move();

		
	};
};

	new p5(g,'jugsContainer');

	
/////////////////////////////////// BOOK ///////////////////////////////////////////////////////////


var l = function( p ) {

var ran;
var arr;
var f;

	p.setup = function() {
		p.createCanvas(200,250);
		p.stroke(255,0,0);
		p.loadImage("book.gif", function(img) {
		p.image(img, -80, -10,350,350);})
		ran=false;
		arr=["Arial", "Courier New", "Georgia", "Times New Roman", "Trebuchet MS", "Verdana"];

		

	};


	


	p.draw = function() {
		p.noStroke();
		f=p.round(p.random(0,5));
		if(p.mouseX>0 && p.mouseX<200 && p.mouseY>0 && p.mouseY<250 ){
			ran=true;
			p.rotate(50);
			p.fill(255);
			p.rect(10,110,40,65);
			p.textSize(20);
			p.fill(0);
			p.textFont(arr[f],20);
			p.text("The",10,130);
			p.text("End",10,170);
		}
		else{
			ran=false;
		}


		
	};
};

	new p5(l,'bookContainer');

	




