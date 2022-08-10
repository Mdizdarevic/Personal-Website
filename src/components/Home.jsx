import React from 'react';
import {useState} from "react";


const Home = () => {

    const [msg, setMsg] = useState({
        name : "",
        email : "",
        message : ""
      });
      const handleChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
    
        setMsg({...msg, [name]:value});
      }
    
      const handleSubmit = async (event)=>{
        event.preventDefault();
    
        const {name, email, message} = msg;
        try {
          const res = await fetch('/message', {
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
              name, email, message
            })
          })
          console.log(res.status)
          if(res.status === 400 || !res){
            window.alert("Message Not Sent. Try Again Later")
          }else{
            window.alert("Message Sent");
            setMsg({
              name : "",
              email : "",
              message : ""
            })
            
          }
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <div>
            <nav id="navbar-example" class="navbar fixed-top navbar-expand-lg shadow">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <a class="nav-link active navbar-brand fw-bolder fs-4 mr-auto" href="#">
                <span class="sr-only">(current)</span>
                <img src="/logo192.png" width="30" height="30" 
                class="d-inline-block align-top" alt=""/>Company Logo
              </a>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto order-5">
                    <li class="nav-item fw-bolder">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item fw-bolder">
                        <a class="nav-link" href="#service">Services</a>
                    </li>
                    <li class="nav-item fw-bolder">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
              </div>
            </div>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                <section id="home" className="flex height-fix">
                    <div className="container my-5 py-5">
                        <div className="row justify-content-center">
                            <div className="col-md-6 mt-5">
                                <h1 className="display-4 fw-bolder mb-4 text-center text-white">Hello, I'm Moreno.</h1>
                                <p className="lead text-center fs-4 mb-5 text-white">
                                    I'm a freelance developer here to help you design and build the website you need.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about" className="pb-5">
                    <div className="container my-5 py-5">
                        <div className="row mb-5">
                            <div className="col-12">
                                <h3 className="fs-5 text-center mb-0">About Me</h3>
                                <h1 className="display-6 text-center mb-4">Who Am I</h1>
                                <hr className="w-25 mx-auto mb-3"/>
                                <p className="w-75 lead mx-auto mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi odit dolorum, necessitatibus dignissimos reprehenderit dicta id rem. Exercitationem soluta ipsam necessitatibus aliquid totam recusandae a alias optio eum quas, corrupti ducimus cupiditate aut adipisci eos tempora quam similique nemo quo, vel dicta blanditiis. Esse magnam laudantium officiis et sed quis?</p>
                                <p className="w-75 lead mx-auto mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi odit dolorum, necessitatibus dignissimos reprehenderit dicta id rem. Exercitationem soluta ipsam necessitatibus aliquid totam recusandae a alias optio eum quas, corrupti ducimus cupiditate aut adipisci eos tempora quam similique nemo quo, vel dicta blanditiis. Esse magnam laudantium officiis et sed quis?</p>
                                <div className="fs-5 text-center mb-0">
                                    <button className="btn btn-danger-primary rounded-pill px-4 py-2 ms-2">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="service" className="pb-5">
            <div className="container my-5 py-5">
            <div className="row mb-5">
                <div className="col-12">
                <h3 className="fs-5 text-center mb-0">Services</h3>
                <h1 className="display-6 text-center mb-4">
                    Why work with me?
                </h1>
                <hr className="w-25 mx-auto" />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                <div className="card p-3 ">
                    <div className="card-body text-center">
                    <h5 className="card-title mb-3 fs-4 fw-bold">Good sounding "user experience" project title</h5>
                    <p className="card-text lead">
                        idk, explain more
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="card p-3 ">
                    <div className="card-body text-center">
                    <h5 className="card-title mb-3 fs-4 fw-bold">Good sounding "user experience" project title</h5>
                    <p className="card-text lead">
                        idk, explain more
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="card p-3 ">
                    <div className="card-body text-center">
                    <h5 className="card-title mb-3 fs-4 fw-bold">Good sounding "user experience" project title</h5>
                    <p className="card-text lead">
                        idk, explain more
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                <div className="card p-3 ">
                    <div className="card-body text-center">
                    <h5 className="card-title mb-3 fs-4 fw-bold">Good sounding "user experience" project title</h5>
                    <p className="card-text lead">
                        idk, explain more
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="card p-3 ">
                    <div className="card-body text-center">
                    <h5 className="card-title mb-3 fs-4 fw-bold">Good sounding "user experience" project title</h5>
                    <p className="card-text lead">
                        idk, explain more
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="card p-3 ">
                    <div className="card-body text-center">
                    <h5 className="card-title mb-3 fs-4 fw-bold">Good sounding "user experience" project title</h5>
                    <p className="card-text lead">
                        idk, explain more
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section id="contact" className="pb-5">
            <div className="container my-5 py-5">
            <div className="row mb-5">
                <div className="col-12">
                <h3 className="fs-5 text-center mb-0">Contact</h3>
                <h1 className="display-6 text-center mb-4">
                    Get In Touch
                </h1>
                <hr className="w-25 mx-auto" />
                </div>
            </div>
                <div className="fs-5 text-center mb-0">
                <form onSubmit={handleSubmit} method="POST">
                    <div className="w-50 mx-auto mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="First and Last Name"
                            name="name"
                            value={msg.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-50 mx-auto mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Email Address"
                        name="email"
                        value={msg.email}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="w-50 mx-auto mb-3">
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="Your Message"
                        rows="5"
                        name="message"
                        value={msg.message}
                        onChange={handleChange}
                    ></textarea>
                    </div>
                    <button type="submit" className="btn btn-danger-primary rounded-pill px-4">Send Message <i className="fa fa-paper-plane ms-2"></i></button>
                </form>
                </div>
            </div>
        </section>
        <footer className="footer text-white">
            <div className="container">
            <footer className="py-5">
                <div className="d-flex justify-content-between pt-4 mt-1 border-top">
                <p>© 2022 Moreno Dizdarevic Inc. All rights reserved. </p>
                <ul className="list-unstyled d-flex">
                    <li className="ms-3">
                    <a className="link-light" href="https://www.facebook.com/moreno.dizdarevic">
                        <i className="fa fa-facebook fa-2x"></i>
                    </a>
                    </li>
                    <li className="ms-3">
                    <a className="link-light" href="https://www.instagram.com/moreno_dizdarevic/">
                        <i className="fa fa-instagram fa-2x"></i>
                    </a>
                    </li>
                    <li className="ms-3">
                    <a className="link-light" href="https://twitter.com/morenodizdar">
                        <i className="fa fa-twitter fa-2x"></i>
                    </a>
                    </li>
                    <li className="ms-3">
                    <a className="link-light" href="https://www.linkedin.com/in/moreno-diz/">
                        <i className="fa fa-linkedin fa-2x"></i>
                    </a>
                    </li>
                    <li className="ms-3">
                    <a className="link-light" href="https://github.com/Mdizdarevic">
                        <i className="fa fa-github fa-2x"></i>
                    </a>
                    </li>
                </ul>
                </div>
            </footer>
            </div>
        </footer>
        </div>
    </div>
    );
}

export default Home;