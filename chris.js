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

$(function() {
    var windowDiv = $("#window");
    var canvas = Raphael('window', windowDiv.width(), windowDiv.height());
    var x = 100;
    var y = 100;
    var radius = 30;
    var fill = "white";
    var a = 400;
    var b = 325;
    var c = 50;
    var fill2 = 'orange';
    var cc = 10;
    var fill3 = 'green';
    var rotate_angle = 0;
    var spin = 0;
    var spin2 = 0;

    var door_top_y = 50;
    var door_bottom_y = 150;

    draw();

    $(document).keydown(function(event) {
	console.log(event.which);
	if (event.which == KEY_RIGHT) {
	    x = x + 10;
	} else if (event.which == KEY_LEFT) {
	    x = x - 10;
	} else if (event.which == KEY_Q) {
	    radius = radius + 5;
	} else if (event.which == KEY_W) {
	    radius = radius - 5;
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
	    rotate_angle += 45;
	}
    });

    var door_modifier = 1;

    setInterval(function() {
	spin += 6;
	spin2 -= 6;
	if (door_top_y >= door_bottom_y) {
	    door_modifier = -1;
	} else if (door_top_y <= 50 || door_bottom_y >= 150) {
	    door_modifier = 1;
	}
	door_top_y += door_modifier;
	door_bottom_y -= door_modifier;
	draw();
    }, 16);

    function draw() {
	canvas.clear();
	canvas.circle(x, y, radius).attr('fill', fill);
	canvas.circle(a, b, c).attr('fill', fill2);
	canvas.circle(a, b, cc).attr('fill', fill3);
	canvas.path("M 0 200 L 400 200").attr('stroke', "blue");
	canvas.path("M 400 0 L 400 " + door_top_y).attr("stroke", "blue");
	canvas.path("M 400 " + door_bottom_y + " L 400 200").attr("stroke", "blue");
	canvas.path('M 400 200 L 500 400 L 300 400 z').attr('stroke', 'blue').rotate(rotate_angle, 400, 200);
	canvas.path("M 200 50 L 225 75 L 175 75 z").attr({stroke: "red", "stroke-width": 3, fill: "blue"}).rotate(spin, 200, 50);
	canvas.path("M 200 150 L 225 175 L 175 175 z").attr({stroke: "red", "stroke-width": 3, fill: "blue"}).rotate(spin2, 200, 150);
    }
});
