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
                        <center>
                        <p style={{ marginTop: 20 }}>
                            <h1 style={{ fontFamily: 'sans-serif', fontSize: 50, fontWeight: 'bold', marginTop: 40 }}>

                                Welcome to Suraj World!</h1>
                            <p style={{ fontSize: 25, marginTop: 30, fontWeight: 'bold' }}>
                                Hi, I am <span style={{ color: '#488AC7' }}>Suraj Rama Yadav </span>|<span style={{ color: '#808080' }}>  Studying </span>at Ves Institute of Technology 
                                <span style={{ color: '#808080' }}>  Full Stack App Developer </span> [ React] [Spring Mvc] [Laravel] [Python] | <span style={{ color: '#808080' }}>  Moblile App Developer </span> [Java] [React Native] [Flutter]
    </p>
                          
                        </p>
                        </center>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home
