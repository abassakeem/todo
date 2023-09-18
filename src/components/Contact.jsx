
import Avatar from './Avatar'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Waving from './Waving';
import Dancing from './Dancing';

export default function Contact() {


    const formRef = useRef();
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [loading, setLoading] = useState(false);
  
    const handleChange = (e) => {
      const { target } = e;
      const { name, value } = target;
  
      setForm({
        ...form,
        [name]: value,
      });
    };
  //JW-1ppZFU-7jBi_jD
  //template_ku837ts
  
  //service_xuliy9e
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
  
      emailjs
        .send(
         "service_xuliy9e",
         "template_ku837ts",
          {
            from_name: form.name,
            to_name: "Lanre-abass Akeem",
            from_email: form.email,
            to_email: "lanreabassab1@gmail.com.",
            message: form.message,
          },
          "JW-1ppZFU-7jBi_jD"
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
  
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
  
            alert("Ahh, something went wrong. Please try again.");
          }
        );
    };
  
  return (
    <div className='vh-100 contact-section'>
<Container  className="mt-12 d-flex  gap-10 overflow-hidden">
  <Col
    xs={12}
    md={6}
    
    className="bg-white p-4 p-md-5 rounded-2xl"
   
  >
    <p className="text-muted font-medium-lg text-lg text-md-26 text-sm-20 text-xs-16">Get in touch</p>
    <h1 className="section-header font-weight-bold md-text-60 sm-text-50 xs-text-40 text-30">Contact.</h1>

    <Form onSubmit={handleSubmit} className="mt-4 mt-md-5 d-flex flex-column gap-4">
      <Form.Group>
        <Form.Label className="text-dark font-medium">Your Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="What's your name?"
          className="bg-white py-3 px-4  font-medium name-input"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label className="text-black font-medium">Your Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="What's your email?"
          className="bg-white py-3 px-4   font-medium email-input"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label className="text-black font-medium">Your Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={7}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="What you want to say?"
          className="bg-white py-3 px-4 rounded-lg  font-medium"
        />
      </Form.Group>

      <Button
        type="submit"
        variant="primary"
        className="py-3 px-4 rounded-xl border-0 font-bold send-button "
      >
        {loading ? "Sending..." : "Send"}
      </Button>
    </Form>
  </Col>

  <Col
    xs={12}
    sm={12}
    md={6}
    className="d-none d-md-block"

  >
    <Waving/>
    

  </Col>
</Container>
    </div>
  )
}
