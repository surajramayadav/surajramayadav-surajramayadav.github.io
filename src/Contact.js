import React, { useState } from 'react'

function Contact() {
    const [name,setname]=useState()
    const [e,sete]=useState()
    const [m,setm]=useState()
  const handle=()=>{
    
      alert("Thanks You "  +name)
      setname()
      sete()
      setm()
  }
    return (
        <>
            <div class="container">
                <center>
                    <br />
                    <br />
                    <div className="card w-100" >
                        <div class="card-header bg-primary text-white">
                            <strong>Contact Us </strong>
                        </div>
                        <div className="card-body">

                            <form>
                                <div class="form-group">

                                    <input type="email" value={name} class="form-control" id="exampleFormControlInput1" placeholder="Enter Name"
                           onChange={e => setname(e.target.value) } />
                                </div>

                                <div class="form-group">
                                    <input type="email" value={e}  onChange={e => sete(e.target.value) }
                                    class="form-control" id="exampleFormControlInput1" placeholder="Enter Email" />

                                </div>
                                <div class="form-group">

                                    <textarea value={m}  onChange={e => setm(e.target.value) }
                                    class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                                </div>
                                <div class="form-group">
                                <button type="button" class="btn btn-primary btn-lg btn-block" onClick={handle}>Send</button> </div>
                            </form>
                        </div>
                    </div>
                </center>
            </div>
        </>
    )
}

export default Contact
