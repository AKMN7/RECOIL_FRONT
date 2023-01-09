import * as faceapi from "face-api.js";

let interval;

async function initVideo(type) {
	console.log("Starting Video");

	await Promise.all([
		faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
		faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
		faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
		faceapi.nets.faceExpressionNet.loadFromUri("/models"),
	]).then(function () {
		const video = document.getElementById("video");

		navigator.mediaDevices
			.getUserMedia({ video: {} })
			.then(function (stream) {
				video.srcObject = stream;
				video.onloadedmetadata = function (e) {
					video.play();
				};
			})
			.catch(function (err) {
				console.log(err.name + ": " + err.message);
			});

		video.addEventListener("play", () => {
			const canvas = faceapi.createCanvasFromMedia(video);
			document.getElementById("video-stream").appendChild(canvas);

			const displaySize = { width: video.width, height: video.height };
			faceapi.matchDimensions(canvas, displaySize);

			interval = setInterval(async () => {
				if (type === "webcam-face-expression-recognition") {
					webcamWithExpressions(video, displaySize, canvas);
				} else {
					webcamWithOutExpressions(video, displaySize, canvas);
				}
			}, 100);
		});
	});
}

async function webcamWithExpressions(video, displaySize, canvas) {
	const detections = await faceapi
		.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
		.withFaceLandmarks()
		.withFaceExpressions();

	const resizedDetections = faceapi.resizeResults(detections, displaySize);
	canvas.getContext("2d", { willReadFrequently: true }).clearRect(0, 0, canvas.width, canvas.height);
	faceapi.draw.drawDetections(canvas, resizedDetections);
	faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
	faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
}

async function webcamWithOutExpressions(video, displaySize, canvas) {
	const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();

	const resizedDetections = faceapi.resizeResults(detections, displaySize);
	canvas.getContext("2d", { willReadFrequently: true }).clearRect(0, 0, canvas.width, canvas.height);
	faceapi.draw.drawDetections(canvas, resizedDetections);
	faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
}

function killInterval() {
	console.log("Interval Killed");
	clearInterval(interval);
}

export default { initVideo, killInterval };
