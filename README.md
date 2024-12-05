# Side Step Trainer 

This is a web application that uses TensorFlow.js and the COCO-SSD model to track how close your are to teh camera and help you practice side steps by giving you visual cues (arrows) when you get close enough. 

## Demo
https://zackakil.github.io/side-step-trainer/

## Features
- **Real-time Person Detection:** Uses the COCO-SSD model to detect a person in the webcam feed.
- **Height Tracking:**  Calculates and displays the height of the detected person in real-time.
- **Adjustable Threshold:**  Allows you to set a height percentage threshold that triggers visual cues. 
- **Visual Cues:** Displays left or right arrows on the screen, indicating the direction you should step when you reach the height threshold.
- **Camera Selection:**  Lets you choose from available cameras (if your device has multiple cameras).
- **Mobile-Friendly:**  Designed to work seamlessly on both desktop and mobile devices.

## How to Use
1. **Allow Webcam Access:** Grant the browser permission to access your webcam.
2. **(Optional) Select Camera:**  If you have multiple cameras, use the dropdown to select your preferred one.
3. **Adjust Threshold:**  Use the slider to set the height percentage that triggers the visual cues. A higher threshold means you need to get closer to teh camera before you get a cue.
4. **Start Stepping:**  Position yourself in front of the camera walk backwards until the arrow cue disapears. Run towards the camera, when you get close enough an arrow will appear on the screen, prompting you to step in that direction. 

## Technologies Used
- **TensorFlow.js:**  A JavaScript library for training and deploying machine learning models in the browser.
- **COCO-SSD Model:**  A pre-trained object detection model that can identify various objects, including people.
- **HTML5, CSS, JavaScript:**  Front-end technologies used to build the user interface and functionality.

