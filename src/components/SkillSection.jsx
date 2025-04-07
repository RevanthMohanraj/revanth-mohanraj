import React, { useEffect, useState } from 'react';
import './SkillSection.scss';

const SkillSection = ({id}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="skill-container" id={id}>
      <div className="about-me">
        <div className="about-me-text">
          <b>.../About me...</b>
        </div>
        <div className="about-me-desc">
          I'm Revanth, a <b><i>full-stack developer.</i></b><br />
          About <b><i>2 years</i></b>&nbsp;experience.
        </div>
      </div>

      <div className="skill-collection-table">
        <div className="skill-wrapper">
          <div className="skill-holder">
            <div className="front-end">
              <div className="content-wrapper">
                <div className="title">Front-end</div>
                <div className="f-item-wrapper">
                  <div className="f-item">JS/</div>
                  <div className="f-item">TS/</div>
                  <div className="f-item">ReactJS/</div>
                  <div className="f-item">JSP</div>
                </div>
              </div>
            </div>
            <div className="back-end">
              <div className="content-wrapper">
                <div className="title">Back-end</div>
                <div className="f-item-wrapper">
                  <div className="f-item">Java/</div>
                  <div className="f-item">FastAPI/</div>
                  <div className="f-item">MVC/</div>
                  <div className="f-item"> RESTful</div>
                </div>
              </div>
            </div>
            <div className="db">
              <div className="content-wrapper">
                <div className="title">Database</div>
                <div className="f-item-wrapper">
                  <div className="f-item">MySQL/</div>
                  <div className="f-item">SQL Server/</div>
                  <div className="f-item">MongoDB</div>
                </div>
              </div>
            </div>
            <div className="hobby">
              <div className="content-wrapper">
                <div className="title">Hobby</div>
                <div className="f-item-wrapper">
                  <div className="f-item">Farming/</div>
                  <div className="f-item">Doing Embedded projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="image-wrapper">
          <div className="img-holder" style={{
            backgroundImage: `url(${isMobile ? '/nithin-charles-2.jpeg' : '/nithin-charles.jpeg'})`
          }} />
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
