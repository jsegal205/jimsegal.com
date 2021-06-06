import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faDev,
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

import ExternalLink from "../components/ExternalLink";

type HomeProps = {};

const Home = ({}: HomeProps) => {
  return (
    <main className="home container">
      <div>
        <img
          alt="profile picture of me, Jim"
          className="avatar"
          src="img/jim.jpg"
        />
        {/* TODO: make component
         <div className="toggle">
          <label className="switch">
            <input type="checkbox" id="toggle-chk" />
            <div className="slider round"></div>
          </label>
        </div> */}
      </div>
      <div className="wrapper">
        <h1 className="title">Jim Segal</h1>
        <nav className="link-row">
          {/* TODO: replace with react router internals when moving for v2 */}
          <a href="mailto:hello@jimsegal.com" title="email">
            <FontAwesomeIcon icon={faEnvelope} title="email" />
          </a>
          <ExternalLink link="https://dev.to/jsegal205/" title="dev dot to">
            <FontAwesomeIcon icon={faDev} title="dev dot to" />
          </ExternalLink>
          <ExternalLink link="https://github.com/jsegal205" title="github">
            <FontAwesomeIcon icon={faGithub} title="github" />
          </ExternalLink>
          <ExternalLink
            link="https://www.linkedin.com/in/jimsegal/"
            title="linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} title="linkedin" />
          </ExternalLink>
          <ExternalLink
            link="https://stackoverflow.com/users/282110/jim"
            title="stack overflow"
          >
            <FontAwesomeIcon icon={faStackOverflow} title="stack overflow" />
          </ExternalLink>
        </nav>
        <div className="about">website developer, hobbyist 3D creator</div>
        <div className="projects">
          <h2 className="projects-banner">Projects</h2>
          <ul>
            {/* make map for these links and iterate over them */}
            <li>
              <a href="printer/" title="3D Printer">
                3D Printer
              </a>
            </li>
            <li>
              <a
                href="IsChicagoColderThanAnchorage/"
                title="Is Chicago colder than Anchorage"
              >
                Is Chicago colder than Anchorage?
              </a>
            </li>
            <li>
              <a
                href="https://projects.jimsegal.com/"
                rel="noopener"
                target="_blank"
              >
                My Projects
              </a>
            </li>
            <li>
              <a href="readinglist/" title="Reading List">
                My Reading List
              </a>
            </li>
            <li>
              <a href="tabletop/" title="Tabletop Games">
                My Tabletop Games
              </a>
            </li>
            <li>
              <a href="travel/" title="My Travels">
                My Travels
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;
