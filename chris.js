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

$(function() {
    var windowDiv = $("#window");
    var canvas = Raphael('window', windowDiv.width(), windowDiv.height());
    var x = 100;
    var y = 100;
    var radius = 30;
    var fill = "white";

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
	}
	draw();
    });

    function draw() {
	canvas.clear();
	canvas.circle(x, y, radius).attr('fill', fill);
	canvas.path("M 200 200 L 400 200").attr('stroke', "blue");
	canvas.path("M 300 400 L 500 200").attr("stroke", "green");
    }
});