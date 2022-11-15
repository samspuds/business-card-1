function Profile() {
  return (
    <div id="immy">
      <img id="image" src="InREuzx1_400x400.jpg" />
    </div>
  );
}

function Main() {
  return (
    <div className="main1">
      <h1>Miggle B</h1>
      <h4>Frontend Developer</h4>
      <h5>
        <a href="">myportfolio.com</a>{" "}
      </h5>
      <div className="links">
        <a href="" id="email">
          email
        </a>
        <a href="https://www.linkedin.com/" id="linkd">
          linkedln
        </a>
      </div>
      <section>
        <h3>About</h3>
        <p className="para">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h3>Interests</h3>
        <p className="para">
          Bitcoin. Soccer. Reader. Snowboarding. Gym goer. Entrepreneur. Travel
          geek. Constant learning. Vietnamese Iced coffee sipper.
        </p>
      </section>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a href="https://twitter.com/Miggle_B_">
        <img src="Twitter Icontwit.png" />
      </a>
      <a href="">
        <img src="Facebook Iconfb.png" />
      </a>
      <a href="">
        <img src="Instagram Icon.png" />
      </a>
      <a href="">
        <img src="GitHub Icongit.png" />
      </a>
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <div className="container1">
        <Profile />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
