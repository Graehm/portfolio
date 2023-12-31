// import React, { useState } from "react"
// import { useState } from "react";
import React from "react";
import { useForm, ValidationError } from "@formspree/react"
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const [state, handleSubmit] = useForm("xnqkwqya");
  if(state.succeeded) {
    return <p style={{ textAlign: "center" }}>Thank you for writing to me!</p>
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                 <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""} alt="">
                  <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col size={12} md={6} className="px-1" htmlFor="first-name">
                          <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="First Name">
                          </input>
                          <ValidationError prefix="Name" field="name" errors={state.errors} />
                        </Col>
                        <Col size={12} md={6} className="px-1" html="lastName">
                          <input
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Last Name">
                          </input>
                          <ValidationError prefic="Name" field="name" errors={state.errors} />
                        </Col>
                        <Col size={12} md={6} className="px-1" html="email">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email">
                          </input>
                          <ValidationError prefix="Email" field="email" errors={state.errors}/>
                        </Col>
                        <Col size={12} md={6} className="px-1" html="Phone Number">
                          <input
                            type="text"
                            id="number"
                            name="number"
                            placeholder="Phone No.">
                          </input>
                          <ValidationError prefix="Phone Number" field="phone number" errors={state.errors}/>
                        </Col>
                        <Col size={12} className="px-1">
                          <textarea
                            rows="6"
                            width="12"
                            className="px-1"
                            name="message"
                            placeholder="Message">   
                          </textarea>
                          <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </Col>
                        <button type="submit" disabled={state.submitting}>Send</button>
                      </Row>
                    </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

// -------------- OG contact form ------------------- //
// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: ''
//   }
//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState('Send');
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//       setFormDetails({
//         ...formDetails,
//         [category]: value
//       })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");
//     let response = await fetch("http://localhost:3008/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(formDetails),
//     });
//     setButtonText("Send");
//     let result = await response.json();
//     setFormDetails(formInitialDetails);
//     if (result.code === 200) {
//       setStatus({ succes: true, message: 'Message sent successfully'});
//     } else {
//       setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
//     }
//   };

//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
//               }
//             </TrackVisibility>
//           </Col>
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                 <h2>Get In Touch</h2>
//                 <form onSubmit={handleSubmit}>
//                   <Row>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
//                     </Col>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
//                     </Col>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
//                     </Col>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
//                     </Col>
//                     <Col size={12} className="px-1">
//                       <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
//                       <button type="submit"><span>{buttonText}</span></button>
//                     </Col>
//                     {
//                       status.message &&
//                       <Col>
//                         <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
//                       </Col>
//                     }
//                   </Row>
//                 </form>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   )
// }
