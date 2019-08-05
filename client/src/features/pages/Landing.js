import React from "react";
import "./Pages.css";

const Landing = () => (
  <div className="page-container">
    <header>
      <h4>
        <strong>Welcome</strong>
      </h4>
    </header>
    <main>
      <div className="main-contaier">
        <section>
          <strong>Description of Project</strong>
          <article>
            <p>
              Project to showcase coding proficiency, organisation and structure
              using React and Nodejs
            </p>
            <p>
              Idea is to build a data visualisation tool using dataset with
              economic, geographic and population data from Brazilian cities.
              The final version should contain a dashboard with interactive
              graphs
            </p>
            <p>Tech Stack Front End (for now)</p>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Material Design Components</li>
            </ul>
            <p>Tech Stack Back End (for now)</p>
            <ul>
              <li>Nodejs</li>
              <li>Express</li>
              <li>SQLite Database</li>
            </ul>
            <p>
              PLEASE NOTE: this is not a final version, still lots to be
              improved!
            </p>
          </article>
        </section>
        <section>
          <strong>To Do List</strong>
          <article>
            <ul>
              <li>Format App with implemented CSS structure</li>
              <ul>
                <li>Implement common theme across app</li>
                <li>paddings and margins</li>
                <li>
                  font sizes for different elements and homogeneity across app
                </li>
                <li>colours and appearance of components</li>
                <li>graph colours when interacting should not change</li>
              </ul>
              <li>Develop dashboard graphs and layout</li>
              <li>Create form for adding and editing cities</li>
              <ul>
                <li>data validation in front end</li>
                <li>data validation in back end</li>
              </ul>
              <li>Add some unit, integration and end 2 end tests</li>
              <li>Add animations for rendering some of the components</li>
              <li>Look for and remove code duplication</li>
            </ul>
          </article>
        </section>
      </div>
    </main>
  </div>
);

export default Landing;
