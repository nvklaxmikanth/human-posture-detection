import React from 'react'

import './About.css'



export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading">About</h1>
            <div className="about-main">
                <p className="about-content">
                    The Human Pose Recognition system is an innovative and useful project that utilizes artificial intelligence to detect different body poses in real-time. By predicting keypoints or coordinates of various parts of the body using a pre-trained model, the system can classify poses with high accuracy. This approach allows the system to provide feedback on the user's pose and notify them if they are doing it correctly or not. The model has been trained in Python and converted to TensorFlow.js for use in the browser, making it accessible to a wide range of users. Overall, this project demonstrates the potential of AI in improving physical activities and could be useful for people looking to enhance their posture or form in various activities.
                </p>
            </div>
        </div>
    )
}
