import React from 'react'
import Cardlist from './Card';

function Service() {
    const data=[
        {
           img:'/web.jpg',
           name:'Web Development',
           app:'React Java Python etc ...',
           desc:'We develop customized software as per our clients need with 100% customer satisfaction and Maintenance.'

        },{
            img:'/android.jpg',
            name:'Mobile App Development',
            app:'Flutter and React Native',
            desc:'We love to develop all kinds of mobile application including native & hybrid (for Andriod, iOS & Windows Phone).'
 
        },{
            img:'/desktop.jpg',
            name:'MySQL Desktop App',
            app:'C++',
            desc:'We also Love to make deskop console app usng c++ with database as MySql with better security options.'
 
        },{
            img:'/Web_hosting.jpg',
            name:'Web Hosting',
            app:'GoDaddy, Hostinger etc...',
            desc:'We provide Linux & Windows Hosting at a very nominal price with extra awesome and advance hosting features.'
 

        },{

            img:'/web_main.jpeg',
            name:'Website Maintainance',
            app:'CMS, ADMIN PANEL etc..',
            desc:'Web Maintenance & Management service will ensure complete protection of your website through constant site-optimization.'
 
        },{
            img:'/api.png',
            name:'Restful Services',
            app:'PHP, NodeJs, LARAVEL',
            desc:'We Provide json or XML data in the form of response to client so that they can analyse the data.'
 
        }
    ]

    const arr= data.map((Card,i)=>{
        return(
            
            <div class="col-md-4 col-sm-6 col-xs-6">
        <br/>
                
            <Cardlist name={data[i].name} 
                        app={data[i].app}
                        desc={data[i].desc}
                        img={data[i].img}
                        />
                          </div>
        
        );
    })
    return (
        <>
        <div className="container">
        <center> <h1 style={{marginTop:20}}> Our Services</h1></center>
        <div className="row">
        {arr}
       
        </div>
    </div>
        </>

    )
}

export default Service
