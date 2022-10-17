
// Crie uma variável canvas
var canvas = new fabric.Canvas('myCanvas');

var ballObj = null;

//Defina as posições iniciais da bola e do buraco.
ballY = 200;
ballX = 500;
holeY = 400;
holeX = 800;


blockImageWidth = 5;
blockImageHeight = 5;

function loadImg() {
	// Escreva o código para enviar a imagem da bola de golfe ao canvasq
	fabric.Image.fromURL("golf-h.png", function (Img) {
		holeObj = Img;
		holeObj.scaleToWidth(50);
		holeObj.scaleToHeight(50);
		holeObj.set({
			top: holeY,
			left: holeX
		});
		canvas.add(holeObj);
	});
	newImage();
}

function newImage() {
	// Escreva o código para enviar a imagem da bola ao canvas
	fabric.Image.fromURL("ball.png", function (Img) {
		ballObj = Img;
		ballObj.scaleToWidth(40);
		ballObj.scaleToHeight(40);
		ballObj.set({
			top: ballY,
			left: ballX
		});
		canvas.add(ballObj); 
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
	E se a id coordenadas coincidem, para remover a imagem da bola
	e exibir "Você atingiu o objetivo!!!" 
	além de tornar a borda do canvas vermelha 'red'. */

	if ((ballX >= holeX) && (ballY >= holeY)) {
		canvas.remove(ballObj);
		document.getElementById("hd3").innerHTML = "Você atingiu o objetivo!!";
		document.getElementById("myCanvas").style.borderColor = "red";
	} else {
		if (keyPressed == '38') {
			up();
			console.log("up");
		}
		if (keyPressed == '40') {
			down();
			console.log("down");
		}
		if (keyPressed == '37') {
			left();
			console.log("left");
		}
		if (keyPressed == '39') {
			right();
			console.log("right");
		}
	}

	function up() {
		if (ballY >= 5) {
			ballY = ballY - blockImageHeight;
			canvas.remove(ballObj);
			newImage();
		}
	}

	function down() {
		if (ballY <= 460) {
			ballY = ballY + blockImageHeight;
			canvas.remove(ballObj)
			newImage();
		}
	}

	function left() {
		if (ballX >= 5) {
			ballX = ballX - blockImageWidth;
			canvas.remove(ballObj);
			newImage();
		}
	}

	function right() {
		if (ballX <= 1060) {
			ballX = ballX + blockImageWidth;
			canvas.remove(ballObj);
			newImage();
		}
	}

}