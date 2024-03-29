import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import './Skills.css';


function Skills() {
  return (
    <div className='containers'>
    <section>
      <h3>My Skills</h3>
      
    
    
   <div className='container1' id='Skills'>
        <div class="text-1"> 
      <span class="ani">F</span> 
      <span class="ani">r</span>
      <span class="ani">o</span>
      <span class="ani">n</span> 
      <span class="ani">t</span> 
      <span class="ani">e</span> 
      <span class="ani">n</span>
      <span class="ani">d</span>
    </div>
        <div className='Technical-bars'>
          <div className='bar'>
            <FontAwesomeIcon icon={faHtml5} style={{ color: '#f0edcf' }} />
            <div className='info'>
              <span>HTML</span>
            </div>
            <div className='progress-line html'>
              <span></span>
            </div>
          </div>
          <div className='bar'>
            <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#f0edcf' }} />
            <div className='info'>
              <span>CSS</span>
            </div>
            <div className='progress-line css'>
              <span></span>
            </div>
          </div>
          <div className='bar'>
            <FontAwesomeIcon icon={faJs} style={{ color: '#f0edcf' }} />
            <div className='info'>
              <span> JavaScript</span>
            </div>
            <div className='progress-line javascript'>
              <span></span>
            </div>
          </div>
          <div className='bar'>
            <FontAwesomeIcon icon={faReact} style={{ color: '#f0edcf' }} />
            <div className='info'>
              <span> ReactJs</span>
            </div>
            <div className='progress-line reactjs'>
              <span></span>
            </div>
          </div>
        </div>
      </div>


      <div className="skill-container">
      <div class="text"> 
      <span class="ani">B</span> 
      <span class="ani">a</span>
      <span class="ani">c</span>
      <span class="ani">k</span> 
      <span class="ani">e</span> 
      <span class="ani">n</span> 
      <span class="ani">d</span>
    </div>
      <div className="skill-wrapper">
        <div className="skill">
          <h4>Java</h4>  
          <div class="loader">
            <div class="intern"></div>
            <div class="external-shadow">
              <div class="central"></div>
            </div>
          </div>
        </div>
        
        <div className="skill">
        <h5>Python</h5>  
          <div class="loader-2">
            <div class="intern-2"></div>
            <div class="external-shadow-2">
              <div class="central-2"></div>
            </div>
          </div>
        </div>

        <div className="skill">
        <p><b>NodeJs</b></p>  
          <div class="loader-3">
            <div class="intern-3"></div>
            <div class="external-shadow-3">
              <div class="central-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </div>
  );
}

export default Skills;
