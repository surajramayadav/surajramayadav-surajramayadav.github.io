import React from 'react'
import { FaInstagram, FaGithub,FaFacebookF } from 'react-icons/fa';
function About() {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <center>
                            <img src={process.env.PUBLIC_URL + '/suraj.jpg'}  style={{ marginTop: 20 }} alt="Avatar" className="avatar" />
                            <p style={{fontWeight:'bold',fontSize:30}}>
                                Software Developer
                                
                            </p>
                           <span class="badge badge-primary" ># It Professional</span>	&nbsp;
                           <span class="badge badge-primary" ># Software Engineer</span>	&nbsp;
                           <span class="badge badge-primary" ># C++</span>	&nbsp;
                           <span class="badge badge-primary" ># Python</span>	&nbsp;
                           <span class="badge badge-primary" ># Java</span>	&nbsp;
                           <span class="badge badge-primary" ># React Native</span>	&nbsp;
                           <span class="badge badge-primary" ># React</span>	&nbsp;
                           <span class="badge badge-primary" ># Laravel</span>	&nbsp;
                           <span class="badge badge-primary" ># .Net </span>	&nbsp;
                           <span class="badge badge-primary" ># FireBase </span>	&nbsp;
                           <span class="badge badge-primary" ># Flutter </span>	&nbsp;
                           <span class="badge badge-primary" ># Sql </span>	&nbsp;
                        </center>
                    </div>
                    <div class="col-sm-8">
                        <center>

                        <p style={{ margin: 40 }}>
                             <p style={{fontSize:30,fontWeight:'bold'}}>
                                 Follow Me On
                             </p>
                            <button type="button" class="btn btn-link" style={{ borderRadius: 10,marginTop:10, borderColor: 'black' }}>
                                <FaInstagram
                                    size={25} color='#E1306C' /> <span >
                               <a href="https://www.instagram.com/surajramayadav/"> Surajramayadav </a></span>
                            </button>
                        	&nbsp;
                            <span style={{ }}>
                                <button type="button" class="btn btn-link" style={{ borderRadius: 10,marginTop:10, borderColor: 'black' }}>
                                    <FaGithub
                                        size={25} color='black' /> <span >
                                       <a href="https://github.com/surajramayadav"> Surajramayadav </a></span>
                                </button>
                            </span>
                            
                        </p>
                        <span className='st1'>
          I am Pursuing MCA from VES Institute of Technology, Mumbai <br/>
          I belong to Mumbai, India <br/><br/>
          My area of interest is Application Development, Web Development <br/>
          Playing Cricket, Learning new Technologies, self-learning and many more. <br/><br/>
          Mainly My Intermediate Expertise is with <strong>Mobile Application Development using React Native And FlutterSDK.</strong>
          <br/>
          Also I have <strong>Expertise with Full Stack Web Appp Development using React And Laravel.</strong>
        </span>
                        </center>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default About
