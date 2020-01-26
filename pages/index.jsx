import Logo from '../components/Logo';
import Moons from '../components/Moons';

const Index = () => (
  <div>
    <div className = "centered">
      <div className = "header">
        <Logo />
        <h3>michael c. martinez</h3>
        <h5>aka</h5>
        <h3>harsimus</h3>
      </div>
      <div className = "content">
        <p>
          I am a web developer currently building things with <a href="https://dialup.digital">DIAL UP Digital.&nbsp;</a>
          In my free time I <a href="https://github.com/harsimus">code</a> and <a href="https://twitter.com/harsimus">tweet&nbsp;</a>
          about fighting games. If you want more details you can check out my <a href="./public/MCMResume.pdf" download>resume&nbsp;</a>
          and feel free to <a href="mailto:michael@harsim.us">e-mail</a> me whenever.
        </p>
      </div>
      <div className = "footer">
        <Moons />
      </div>
    </div>

    <style>
      {`
        html {
          position: relative;
          background-color: #000000;
        }

        body {
          margin: 0px !important;
          font-family: Helvetica, Arial, Sans-Serif;
          font-weight: bold;
          color: #FFFFFF;
        }

        a:link {
          color: #9D2F90;
          text-decoration: none;
          transition: 0.3s;
        }

        a:hover {
          color: #A44ABC;
        }

        .centered {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .header {
          margin: 0 auto;
          text-align: center;
          padding: 2.5%
        }

        .footer {
          margin: 0 auto;
          text-align: center;
          padding-top: 10%
        }

        .content {
          text-align: justify;
          text-justify: inter-word;
          width
        }
      `}
    </style>
  </div>
);

export default Index;
