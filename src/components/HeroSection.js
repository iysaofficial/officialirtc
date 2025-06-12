const HeroSection = () => {
  return (
    <section
      className="main-hero"
      style={{
        background: "url('../assets/img/bg.png') no-repeat center center",
      }}
    >
      <div className="main-hero-overlay ">
        <div className="main-hero-content">
          <h1>International Research Teacher Competition</h1>
          <p>
            Register yourself and your team to compete, share innovations, and expand your network with the best colleagues from all over the world.<br />
            Don’t miss the chance to be part of an inspiring and prestigious event for educators!
          </p>
          <div className="main-hero-buttons">
            <a
              href="https://drive.google.com/file/d/12w7Kl_pqqzDelG_DMesT8S_xpxFK7X2C/view?usp=sharing"
              className="main-hero-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Guide Book
            </a>
            <a href="/homeregist" className="main-hero-btn main-hero-btn-yellow">
              Register Now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;