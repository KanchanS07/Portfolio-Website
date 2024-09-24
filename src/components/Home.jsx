// import React from "react";
import { useRef,useEffect } from "react";
import Typed from "typed.js";
import "./Home.css"

function Home() {
  // Create a ref to attach the Typed.js instance to the DOM element
  const typedRef = useRef(null);

  useEffect(() => {
    // Create a new instance of Typed.js
    const typed = new Typed(typedRef.current, {
      strings: [
        "Web Developer",
        "Front-End Developer",
        "Coder",
        "Problem Solver",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    // Cleanup when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <div className="hero-section">
      <div className="absolute faded-text">Kanchan Soni</div>
      {/* left Part */}
      <div className="hero-section-left">
        <div className="hero-heading">
          Hi
          <img
            alt="waving-hand"
            src="https://jigarsable.vercel.app/_next/static/media/waving-hand.1da6fc7a.gif"
            width="40"
            height="40"
            decoding="async"
            loading="lazy"
            style={{ color: "transparent" }} // style as an object
          />
        </div>
        <div className="hero-heading hero-sub-heading">
          I am a <span className="role" ref={typedRef}></span>
        </div>
        <div className="hero-desc">
          Aspiring Software Developer eager to apply my MCA degree and technical
          expertise in a dynamic and challenging role.
        </div>
        <a href="https://drive.google.com/file/d/1yVh8dR0rb6wlgURLes3VIlyeHN-W0yzu/view?usp=drivesdk">
          <button className="red-btn">Hire Me</button>
        </a>
      </div>
      {/* Right Part */}
      <div className="hero-section-right">
        <div className="absolute icons icon-dot">
          <img src="/public/images/userAssets/dots.png" alt="dots" />
        </div>
        <div className="absolute icons icon-cube">
          <img src="/public/images/userAssets/cube.png" alt="cube" />
        </div>
        <div className="absolute icons icon-circle">
          <img src="/public/images/userAssets/circle.png" alt="circle" />
        </div>
        <div className="absolute icons icon-zigzag">
          <img src="/public/images/userAssets/zigzags.png" alt="zigzag" />
        </div>
        <div className="absolute icons icon-plus">
          <img src="/public/images/userAssets/plus.png" alt="plus" />
        </div>
        <div className="user-image">
          <img src="/public/images/userImage2.jpeg" alt="User" />
        </div>
      </div>
    </div>
  );
}

export default Home;
