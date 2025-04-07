import React from 'react';
import './WorkSection.scss';

const WorkSection = ({id}) => {
  return (
    <div className="work-section-container" id={id}>
      <div className="header">Work</div>

      <div className="work-table-wrapper">
        <div className="item-wrapper">
          <div className="item-1">
            <div className="item-section-1">
              <div className="year">2022 - Ongoing</div>
              <div className="company-name">Wipro</div>
            </div>
            <div className="item-section-2">
              <div className="role">Full-stack Developer&nbsp;|</div>
              <div className="skill">&nbsp;SpringBoot, ReactJS, SSO</div>
            </div>
          </div>
        </div>
      </div>

      <div className="work-experience">
        <p className="desc">Work experience</p>
        <p className="count">2 years</p>
      </div>
    </div>
  );
};

export default WorkSection;
