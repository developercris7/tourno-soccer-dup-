import React from "react";
import "./intro.css";
import Navbar from "../Navbar.js/Navbar";
const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-wrapper">
        <Navbar />

        <div className="welcome-container ">
          <p className="welcome-text">Welcome to Tourno-Soccer!</p>
          <p className="sub-text">
            Your Ultimate Destination for Local Football Tournaments!
          </p>
        </div>

        <div className="row w-100 px-md-2 mx-auto ">
          <div className="col-md-6 order-2 text-white pt-2 mt-2 mt-md-0">
            <p className="lh-3">
              Are you passionate about football? <br></br> Do you thrive on the
              thrill of the game? <br />
              Look no further! Tourno Soccer is here to bring local football
              tournaments directly to you.
            </p>

            <div className="feature-container">
              <h5>Get Start Today</h5>
              <p>1.Explore upcoming tournaments in your city.</p>
              <p>
                2.Post your own tournament and showcase your organizing skills.
              </p>
              <p>3.Connect with players who share your love for the game.</p>
            </div>
          </div>
          <div className="col-md-6 order-1">
            <div className="img-container mx-auto">
              <img
                src="https://img.freepik.com/free-photo/young-caucasian-male-football-soccer-player-kicking-ball-goal-mixed-light-dark-wall-concept-healthy-lifestyle-professional-sport-hobby_155003-38568.jpg?size=626&ext=jpg&ga=GA1.1.1502020834.1705726197&semt=ais"
                // src="https://img.freepik.com/free-photo/portrait-young-man-football-playing-motion-training-isolated-black-studio-background-kicking-ball_155003-46281.jpg?size=626&ext=jpg&ga=GA1.1.1502020834.1705726197&semt=ais"
                alt="ball kick"
                className="img-fluid w-100 h-100"
              />
              
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap text-white align-items-center mt-2 px-md-5">
          <p className="my-auto ms-2">
            Ready to kick off your football journey? Let's make every match
            memorable!
          </p>

          <button className="getStart-btn mt-3 mt-md-0">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Intro;

/* <h2 style={{color:'cornflowerblue'}}>Welcome to Tourno-Soccer</h2>
              <h3></h3>
 
 <div className="d-flex justify-content-between align-items-center w-100 gap-3 my-5 text-start px-2">
 <p className='w-50'>
 <div className="details-container bg-white text-dark">
  <ol>
    <li></li>
    <li>Post your own tournament and showcase your organizing skills.</li>
    <li>Connect with players who share your love for the game.</li>
  </ol>
</div></p>

 
<div className="img-container">
<img src="https://img.freepik.com/premium-photo/soccer-player-yellow-black-uniform_549702-4281.jpg?size=626&ext=jpg&ga=GA1.1.1502020834.1705726197&semt=sph" alt=""  className='img-fluid'/>
</div>
 </div>
 


<p>Ready to kick off your football journey? Let's make every match memorable!</p>

<button className="btn btn-primary">Get Started</button> */
