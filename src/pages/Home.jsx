import "./Home.css";
import slider_image from "../assets/slider_image.jpg";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <img src={slider_image} alt="Banner" />

        <div className="hero-text">
          <h1>Welcome to MERN App</h1>
          <p>
            Build modern web applications using MongoDB, Express,
            React, and Node.js.
          </p>

          <button>Get Started</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Our Platform</h2>

        <p>
          A well-structured paragraph typically consists of three to eight
          sentences that develop a single, cohesive idea. It starts with a
          clear topic sentence, followed by supporting evidence.
        </p>
      </section>

      {/* Cards Section */}
      <section className="cards">

        <div className="card">
          <img src={slider_image} alt="card1" />
          <h3>Fast Development</h3>
          <p>Build scalable apps quickly with MERN stack.</p>
        </div>

        <div className="card">
          <img src={slider_image} alt="card2" />
          <h3>Secure Backend</h3>
          <p>Robust APIs with authentication and security.</p>
        </div>

        <div className="card">
          <img src={slider_image} alt="card3" />
          <h3>Modern UI</h3>
          <p>Clean, responsive frontend with React.</p>
        </div>

        <div className="card">
          <img src={slider_image} alt="card4" />
          <h3>Cloud Ready</h3>
          <p>Deploy easily on cloud platforms.</p>
        </div>

      </section>

    </div>
  );
}

export default Home;
