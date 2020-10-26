import React from 'react'

import { FaInstagram,FaGithub } from 'react-icons/fa';
function Home() {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <br />
                        <img src={process.env.PUBLIC_URL + '/home.png'}  className="img-fluid" alt="Responsive image" />
                    </div>
                    <div class="col-sm">
                        <br />
                        <p style={{ marginTop: 20 }}>
                            <h1 style={{ fontFamily: 'sans-serif', fontSize: 50, fontWeight: 'bold', paddingLeft: 60, marginTop: 40 }}>

                                Welcome to Suraj World!</h1>
                            <p style={{ fontSize: 25, marginTop: 30, paddingLeft: 60, fontWeight: 'bold' }}>
                                Hi, I am <span style={{ color: '#488AC7' }}>Suraj Rama Yadav </span>|<span style={{ color: '#808080' }}>  Studying </span>at Ves Institute of Technology 
                                <span style={{ color: '#808080' }}>  Full Stack App Developer </span> [ React] [Spring Mvc] [Laravel] [Python] | <span style={{ color: '#808080' }}>  Moblile App Developer </span> [Java] [React Native] [Flutter]
    </p>
                            <p style={{ marginTop: 50, paddingLeft: 60 }}>

                                <button type="button" class="btn btn-link" style={{ borderRadius: 10, borderColor: '#E1306C' }}>
                                    <FaInstagram
                                        size={25} color='#E1306C' /> <span >
                                          <a href="https://www.instagram.com/surajramayadav/"> Surajramayadav </a></span>
                                </button> 
                                <span style={{paddingLeft:30}}> 

                                
                                <button type="button" class="btn btn-link" style={{ borderRadius: 10, borderColor: 'black' }}>
                                    <FaGithub
                                        size={25} color='black' /> <span >
                                          <a href="https://github.com/surajramayadav"> Surajramayadav </a></span>
                                </button>
                                </span>
                              
                            </p>
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home
