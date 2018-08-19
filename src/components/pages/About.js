import React from "react";

const About = props => {
  return (
    <div>
      <h1 className="display-4 mb-3">
        <span className="text-danger">Contact</span> Manager
      </h1>
      <h2>{props.match.params.id}</h2>
      <p className="lead">A simple app to manage contacts</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
};

export default About;
