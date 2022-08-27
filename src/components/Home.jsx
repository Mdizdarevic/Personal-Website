import React, { useEffect} from 'react';
import {useState} from "react";
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import Typewriter from "typewriter-effect";


const Home = () => {

      function sendEmail(e) {
        e.preventDefault();    
    
        emailjs
            .sendForm(
                'service_k4z3cgr',
                'template_2aa9ocu',
                e.target, 
                'uqqWewPvqcmWrP7Hy')
            .then(
                (result) => {
                    console.log(result.text);
                    Swal.fire({
                        icon: 'success',
                        title: 'Message Sent Successfully'
                    });
                },
            (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                });
                document.getElementsByClassName("co_alert")[0].scrollIntoView();
            }
          );
      }

    const [showTopButton, setShowTopButton] = useState(false);

        useEffect(() => {
            window.addEventListener("scroll", () => {
            if (window.pageYOffset > 220) {
                setShowTopButton(true);
            } else {
                setShowTopButton(false);
            }
            });
        }, []);

        const scrollToTop = () => {
            window.scrollTo({
            top: 0,
            behavior: 'smooth' 
            });
        };
    const [showAboutButton, setShowAboutButton] = useState(false);
    
        useEffect(() => {
            window.addEventListener("scroll", () => {
            if (window.pageYOffset < 200) {
                setShowAboutButton(true);
            } else {
                setShowAboutButton(false);
            }
            });
        }, []);

        const scrollToAbout = () => {
            window.scrollTo({
            top: 790,
            behavior: 'smooth' 
            });
        };

        const [click, setClick] = useState(false)
        const handleClick = () => setClick(!click)
    
        const closeMenu = () => setClick(false)
    
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 700) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor);
        
    return (
        <body>
        <div>
{/*--------------------------------  BUTTONS  -------------------------------- */}
            {showTopButton && (
                <button onClick={scrollToTop} className="back-to-top">&#8593;</button>
            )}
            {showAboutButton && (
                <button onClick={scrollToAbout} className="down-to-about">&#8595;</button>
            )}
{/*--------------------------------  NAV BAR  -------------------------------- */}
            <div className={color ? 'header header-bg' : 'header'}>
            <nav className='navbar'>
                <a class="nav-link active navbar-brand fw-bolder" href="#">
                    <span class="sr-only">(current)</span>
                    <img src="/bluecastlebg.png" width="40" height="40"
                    class="d-inline-block align-top" alt=""/>&nbsp;
                </a>
                <div className='hamburger' onClick={handleClick}> 
                    {click ? (<FontAwesomeIcon icon={faTimes} />)
                        : (<FontAwesomeIcon icon={faBars} />)}
                </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <ul className='nav-item'>
                            <a href='#about' onClick={closeMenu}>About</a>
                        </ul>
                        <ul className='nav-item'>
                            <a href='#projects' onClick={closeMenu}>Projects</a>
                        </ul>
                        <ul className='nav-item'>
                            <a href='#contact' onClick={closeMenu}>Contact</a>
                        </ul>
                    </ul>
            </nav>
        </div>

{/*--------------------------------  HOME  -------------------------------- */}
            <div data-bs-spy="scroll" data-bs-target="#navbar-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                <section id="home">
                <div className='home'>
                <div className='column_center'>
                    <Typewriter onInit={(typewriter)=> {typewriter.typeString("Hello!").start();}}/>
                    <Typewriter onInit={(typewriter)=> {typewriter.typeString("I'm Moreno").start();}}/>
                    <Typewriter onInit={(typewriter)=> {typewriter.typeString("Web & Mobile App Developer").start();}}/>
                </div>
                </div>
                </section>
{/*--------------------------------  ABOUT  -------------------------------- */}
                <section id="about" className="pb-5">
                <div className="card p-1"/>
                    <div className="row mb-5"  style={{ padding: "5%" }}>
                                <div className="col-12">
                                    <h1 className="font-monospace display-6 text-center mb-4">About</h1>
                                    <div className="hr w-25 mx-auto mb-3"/>
                                </div>
                        <div className="row">
                            <div className="col-lg-6 mb-5">
                                    <h3 className="py-4 font-monospace">Who Am I
                                        <div className="card w-75 p-1"/>
                                    </h3>
                                <div className="col-11">
                                        <p className="font-monospace w-100 lead mx-auto " style={{ fontSize: "18px" }}>I’m a developer from Upstate NY, currently in my final year as a computer science student.</p>
                                        <p className="font-monospace w-100 lead mx-auto" style={{ fontSize: "18px" }}>I first started programming years ago when one day I decided to make my own wallpaper with a tool unknown to me called Python Turtle. I was amazed at how some simple typing could create such a specific design. Years have past and programming has now become a lifelong passion for me. </p>
                                        <p className="font-monospace w-100 lead mx-auto" style={{ fontSize: "18px" }}>My desire is to have a positive impact on the world, by empowering local businesses and nonprofits with my software engineering skills. When I’m not coding, I’m spending my time  learning new technologies, teaching myself French, or binging shows like the Witcher.</p>
                                    </div>
                            </div>
                            <div class="col-lg-6 mb-5" >
                                <div className="col-12 justify-content-between" align="right" style={{alignContent:'flex-end'}}>
                                    <h3 className="py-3 font-monospace">Skills
                                        <div className="card w-75 p-1"/>
                                    </h3>
                                    <p><img src="/html5.png" width="50" height="50"/>
                                        <div className="font-monospace display-6 text-center" style={{ fontSize: "20px" }}>HTML5</div>
                                        <div className="hr w-75 mb-3"/></p>
                                    <p><img src="/css3.png" width="50" height="50"/>
                                        <div className="font-monospace display-6 text-center" style={{ fontSize: "20px" }}>CSS3</div>
                                        <div className="hr w-75 mb-3"/></p>
                                    <p><img src="/js.png" width="50" height="50"/>
                                        <div className="font-monospace display-6 text-center" style={{ fontSize: "20px" }}>JavaScript</div>
                                        <div className="hr w-75 mb-3"/></p>
                                    <p><img src="/react.png" width="50" height="50"/>
                                        <div className="font-monospace display-6 text-center" style={{ fontSize: "20px" }}>React</div>
                                        <div className="hr w-75 mb-3"/></p>
                                    <p><img src="/git.png" width="50" height="50"/>
                                        <div className="font-monospace display-6 text-center" style={{ fontSize: "20px" }}>Git</div>
                                        <div className="hr w-75 mb-3"/></p>
                                    <p><img src="/flutter.png" width="50" height="50"/>
                                        <div className="font-monospace display-6 text-center" style={{ fontSize: "20px" }}>Flutter</div>
                                        <div className="hr w-75 mb-3"/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card p-1"/>
                </section>
{/*--------------------------------  PROJECTS -------------------------------- */}
            <section id="projects" className="pb-5">
            <div className="row mb-5" style={{ paddingTop: "4%" }}>
                        <div className="col-12">
                                <h1 className="font-monospace display-6 text-center mb-4">Projects</h1>
                                <div className="hr w-25 mx-auto mb-3"/>
                        </div>
                    </div>
                <div class="m-5">
                <div class="row gy-3 row-cols-flex" style={{ padding: "3%" }}>
                        <div class="col-sm">
                            <div class="card h-100">
                                <div class="row">
                                    <div class="card-img td-example-same-image-height">
                                        <img src="/assets/pleasework _projects.png" class="card-img-top" alt="..."/>
                                    </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Personal Website</h5>
                                            <p class="card-text">Using HTML, CSS, and the React JS library, I developed and continue to update my personal website in order to showcase my frontend development skills. The website includes features such as hover animations, email sending, page redirects, etc.</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="card h-100">
                                <div class="row">
                                    <div class="card-img td-example-same-image-height">
                                        <img src="/assets/climate_img.jpeg" class="card-img-top" alt="..."/>
                                    </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Climate Database</h5>
                                            <p class="card-text">With the use of Node.js and Mongodb, I worked on a backend database which allows the user to determine the frequency of different climate-related disaster events and find patterns between certain types of disasters and specific regions in the U.S.</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="card h-100">
                                <div class="row">
                                    <div class="card-img td-example-same-image-height">
                                        <img src="/assets/travelapp.jpeg" class="card-img-top" alt="..."/>
                                    </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Travel Buddy App</h5>
                                            <p class="card-text">A mini-project I worked on in my spare time to learn the process of Mobile Application Development. Learned and used the Dart programming language and Google's Flutter framework to develop the front-end of this mobile app.</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="card h-100">
                                <div class="row">
                                    <div class="card-img td-example-same-image-height">
                                        <img src="/assets/peppic.png" class="card-img-top" alt="..."/>
                                    </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Pepper Tool</h5>
                                            <p class="card-text">Pepper is a command-line todo tool designed for software developer use. Developed over the span of an entire semester with three other students, we used Java and a CSV file format to create a tool that allows the user to add, delete, edit, and list tasks.</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

{/*--------------------------------  CONTACT  -------------------------------- */}
                <section id="contact" className="pb-5">
                    <div className="container my-5 py-5">
                        <h1 class="font-monospace display-6 text-center mb-4">Contact</h1>
                        <div className="hr w-25 mx-auto mb-3"/>
                        <br/>
                        <div className="row">
                            <div className="col-lg-5 mb-5">
                                <h3 className="py-4 font-monospace">Get In Touch</h3>
                                <div>
                                    <strong>Email:</strong> 
                                    <a class="nav-link" href="mailto:moreno.dizdarevic@gmail.com">
                                        moreno.dizdarevic@gmail.com&nbsp; <i className="fa fa-envelope fa-1x text-white"></i>
                                        <br/></a>
                                    <br/>
                                    <p><strong>Phone:</strong>
                                        <br/> (315) 235-5889
                                    </p>
                                </div>
                                <br/>
                                <ul className="list-unstyled d-flex">
                                    <a className="link-light" href="https://www.facebook.com/moreno.dizdarevic">
                                        <i className="fa fa-facebook fa-2x"></i>
                                    </a>
                                    <li className="ms-4">
                                    <a className="link-light" href="https://www.instagram.com/moreno_dizdarevic/">
                                        <i className="fa fa-instagram fa-2x"></i>
                                    </a>
                                    </li>
                                    <li className="ms-4">
                                    <a className="link-light" href="https://twitter.com/morenodizdar">
                                        <i className="fa fa-twitter fa-2x"></i>
                                    </a>
                                    </li>
                                    <li className="ms-4">
                                    <a className="link-light" href="https://www.linkedin.com/in/moreno-diz/">
                                        <i className="fa fa-linkedin fa-2x"></i>
                                    </a>
                                    </li>
                                    <li className="ms-4">
                                    <a className="link-light" href="https://github.com/Mdizdarevic">
                                        <i className="fa fa-github fa-2x"></i>
                                    </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-7 d-flex align-items-center">
                                <form className="contact-form w-100" onSubmit={sendEmail}>
                                    <div className='row'>
                                        <div className="col-lg-6 form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="First and Last Name"
                                                name="from_name"
                                            />
                                        </div>
                                        <br/> <br/>
                                        <div className="col-lg-6 form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Email"
                                                name="from_email"
                                            />
                                        </div>
                                    </div>
                                    <br />
                                        <textarea
                                            className="form-control"
                                            id="FormControlTextarea"
                                            placeholder="Your Message"
                                            rows="10"
                                            name="html_message"
                                        />
                                    < br />
                                    <div className="fs-5 text-center mb-0">
                                        <button type="submit" className="btn btn-danger-primary rounded-pill px-4 py-2 ms-2">Send Message <i className="fa fa-paper-plane ms-2"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
{/*--------------------------------  FOOTER  -------------------------------- */}
        <footer className="footer text-white">
            <div className="container">
            <footer className="py-3">
                <div className="justify-content-between text-center pt-3 mt-3 border-top">
                    <p>Made in Upstate NY, USA</p>
                    <p>Copyright © 2022. All rights reserved. </p>
                </div>
            </footer>
            </div>
        </footer>
        </div>
    </div>
    </body>
    );
}

export default Home;