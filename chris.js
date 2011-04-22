KEY_LEFT = 37;
KEY_UP = 38;
KEY_RIGHT = 39;
KEY_DOWN = 40;
KEY_A = 65;
KEY_Q = 81;
KEY_W = 87;
KEY_1 = 49;
KEY_2 = 50;
KEY_S = 83;
Z = 90;
X = 88;
C = 67;
V = 86;
KEY_3 = 51;
KEY_4 = 52;

$(function() {
    var windowDiv = $("#window");
    var canvas = Raphael('window', windowDiv.width(), windowDiv.height());
    var x = 35;
    var y = 30;
    var radius = 6;
    var fill = "white";
    var a = 400;
    var b = 325;
    var c = 50;
    var fill2 = 'red';
    var cc = 10;
    var fill3 = 'green';
    var rotate_angle = 0;
    var spin = 0;
    var spin2 = 0;
    var door_top_y = 50;
    var door_bottom_y = 150;
	var spin3 = 0;
	var xx = 625
	var yy = 150
	var spin4 = 0;
	var p = 30;
	var o = 1;
	var nc1_x = 95;
	var nc1_y1 = 25;
	var nc1_y2 = 200;
	var nc1 = 'M'+nc1_x+' '+nc1_y1+'L'+nc1_x+' '+nc1_y2;
	var nc2_x = 75;
	var nc2_y1 = 0;
	var nc2_y2 = 175;
	var nc2 = 'M'+nc2_x+' '+nc2_y1+'L'+nc2_x+' '+nc2_y2;
	var nc3_x1 = 0;
	var nc3_x2 = 554;
	var nc3_y = 200;
	var nc3 = 'M'+nc3_x1+' '+nc3_y+'L'+nc3_x2+' '+nc3_y;
	var nc4_x = 5;
	var nc4_y1 = 0;
	var nc4_y2 = 200;
	var nc4 = ('M 1 0 L 1 200');
	var nc5_x1 = 0;
	var nc5_x2 = 400;
	var nc5_y = 0;
	var nc5 = 'M'+nc5_x1+' '+nc5_y+'L'+nc5_x2+' '+nc5_y;
	var nc6_x = 560;
	var nc6_y1 = 100;
	var nc6_y2 = 400;
	var nc6 = 'M'+nc6_x+' '+nc6_y1+'L'+nc6_x+' '+nc6_y2;
	var nc7_x = 685;
	var nc7_y1 = 100;
	var nc7_y2 = 400;
	var nc7 = 'M'+nc7_x+' '+nc7_y1+'L'+nc7_x+' '+nc7_y2;
	var nc8_x1 = 695;
	var nc8_x2 = 800;
	var nc8_y = 110;
	var nc8 = 'M'+nc8_x1+' '+nc8_y+'L'+nc8_x2+' '+nc8_y;

	
    draw();

    $(document).keydown(function(event) {
	console.log(event.which);
	if (event.which == KEY_RIGHT) {
	    x = x + 5;
	} else if (event.which == KEY_LEFT) {
	    x = x - 5;
	} else if (event.which == KEY_Q) {
	    radius = radius + 2;
	} else if (event.which == KEY_W) {
	    radius = radius - 2;
	} else if (event.which == KEY_A) {
	    fill = "red";
	} else if (event.which == KEY_UP) {
	    y = y - 10;
	} else if (event.which == KEY_DOWN) {
	    y = y + 10;
	} else if (event.which == KEY_1) {
	    x = x + 10;
	    y = y + 10;
	} else if (event.which == KEY_2) {
	    x = x - 10;
	    y = y - 10;
	} else if (event.which == KEY_S) {
	    fill = "white";
	} else if (event.which == Z) {
	    a = a + 10;
	} else if (event.which == X) {
	    a = a - 10;
	} else if (event.which == KEY_3) {
	    javascript:location.reload(true)
	}
});

    var door_modifier = 1;

    setInterval(function() {
	spin += 6;
	spin2 -= 6;
	if (door_top_y >= door_bottom_y) {
	    door_modifier = -1
	}  
	 if (door_top_y <= 50 || door_bottom_y >= 150) {
	    door_modifier = 1;
	}
	if (radius == 0 || 
		(x == nc1_x && 
		y >= nc1_y1 && 
		y <= nc1_y2 || 
		(x == nc2_x &&
		y >= nc2_y1 &&
		y <= nc2_y2 ||
		(x >= nc3_x1 &&
		x <= nc3_x2 &&
		y == nc3_y ||
		(x == nc4_x &&
		y >= nc4_y1 &&
		y <= nc4_y2 ||
		(x >= nc5_x1 &&
		x <= nc5_x2 &&
		y == nc5_y ||
		(x == nc6_x &&
		y >= nc6_y1 &&
		y <= nc6_y2 ||
		(x == nc7_x &&
		y >= nc7_y1 &&
		y <= nc7_y2 ||
		(x >= nc8_x1 &&
		x <= nc8_x2 &&
		y == nc8_y))))))))){
	   location.reload(true)
     }
	door_top_y += door_modifier;
	door_bottom_y -= door_modifier;
	spin3 += 1;
	spin4 += -1;
	draw();
    }, 16);


    function draw() {
	canvas.clear();
	canvas.circle(x, y, radius).attr('fill', fill);
	canvas.circle(a, b, c).attr('fill', fill2);
	canvas.circle(a, b, cc).attr('fill', fill3);
	canvas.path(nc3).attr({stroke: "blue", "stroke-width": 5});
	canvas.path("M 400 0 L 400 " + door_top_y).attr({stroke: "blue", "stroke-width": 5});
	canvas.path("M 400 " + door_bottom_y + " L 400 203").attr({stroke: "blue", "stroke-width": 5});
	canvas.path('M 400 200 L 500 400 L 300 400 z').attr('stroke', 'blue').rotate(rotate_angle, 400, 200);
	canvas.path("M 200 50 L 225 75 L 175 75 z").attr({stroke: "red", "stroke-width": 3, fill: "blue"}).rotate(spin, 200, 50);
	canvas.path("M 200 150 L 225 175 L 175 175 z").attr({stroke: "red", "stroke-width": 3, fill: "blue"}).rotate(spin2, 200, 150);
	canvas.path("M 692 150 L 558 150 L 625 83 L 625 217 z").attr({stroke: "green", "stroke-width": 1, fill: "green"}).rotate(spin3, 625, 150);
	canvas.path("M 692 300 L 558 300 L 625 233 L 625 367 z").attr({stroke: "green", "stroke-width": 1, fill: "green"}).rotate(spin4, 625, 300);
	canvas.path(nc8).attr({stroke: "blue", "stroke-width": 20});
	canvas.path(nc7).attr({stroke: "blue", "stroke-width": 20});
	canvas.path(nc6).attr({stroke: "blue", "stroke-width": 20});
	canvas.path(nc2).attr({stroke: "blue", "stroke-width": 5});
	canvas.path(nc1).attr({stroke: "blue","stroke-width": 5}); 
	canvas.path(nc4).attr({stroke: "blue", "stroke-width": 5});
	canvas.path(nc5).attr({stroke: "blue", "stroke-width": 5});
	}
});
