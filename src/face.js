import * as faceapi from "face-api.js";
let interval;

// Function To Load face-api.js requried models
async function loadModels() {
	await Promise.all([
		faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
		faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
		faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
		faceapi.nets.faceExpressionNet.loadFromUri("/models"),
		faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
	]);
}

// Function to Initiate Vide Analysis
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

// Function to Kill Interval made by the video analysis
function killInterval() {
	clearInterval(interval);
}

// Function to initiate Image Analysis
async function initPicture(type) {
	const image = document.getElementById("image");
	const canvas = document.getElementById("overlay");
	const displaySize = { width: image.width, height: image.height };

	faceapi.matchDimensions(canvas, displaySize);

	await activateFaceAPI(image, displaySize, canvas, type);
}

// Function to update selected image
async function updateImg(type) {
	const imgInput = document.getElementById("image-select").files[0];
	const img = await faceapi.bufferToImage(imgInput);

	document.getElementById("image").src = img.src;
	await initPicture(type);
}

// Function to active the face-api for both video and image analysis
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

export default { loadModels, initVideo, killInterval, initPicture, updateImg };
