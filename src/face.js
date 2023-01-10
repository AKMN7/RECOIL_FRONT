import * as faceapi from "face-api.js";

let interval;

async function loadModels() {
	await Promise.all([
		faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
		faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
		faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
		faceapi.nets.faceExpressionNet.loadFromUri("/models"),
		faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
	]);
}

async function initVideo(type) {
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
			await activateFaceAPI(video, displaySize, canvas, type);
		}, 100);
	});
}

async function activateFaceAPI(media, displaySize, canvas, type) {
	let detections;

	if (type.startsWith("Webcam")) {
		if (type.includes("Expression")) {
			detections = await faceapi
				.detectAllFaces(media, new faceapi.TinyFaceDetectorOptions())
				.withFaceLandmarks()
				.withFaceExpressions();
		} else {
			detections = await faceapi.detectAllFaces(media, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();
		}
	} else {
		if (type.includes("Expression")) {
			detections = await faceapi.detectAllFaces(media).withFaceLandmarks().withFaceExpressions();
		} else {
			detections = await faceapi.detectAllFaces(media).withFaceLandmarks();
		}
	}

	const resizedDetections = faceapi.resizeResults(detections, displaySize);
	canvas.getContext("2d", { willReadFrequently: true }).clearRect(0, 0, canvas.width, canvas.height);
	faceapi.draw.drawDetections(canvas, resizedDetections);
	faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);

	if (type.includes("Expression")) faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
}

function killInterval() {
	console.log("Interval Killed");
	clearInterval(interval);
}

async function initPicture(type) {
	console.log("IMAGE PROCESSING");
	const image = document.getElementById("image");
	const canvas = document.getElementById("overlay");
	const displaySize = { width: image.width, height: image.height };

	faceapi.matchDimensions(canvas, displaySize);

	await activateFaceAPI(image, displaySize, canvas, type);
}

export default { loadModels, initVideo, killInterval, initPicture };
