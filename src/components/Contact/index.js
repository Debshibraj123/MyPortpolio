import './style.css'
import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_hi9enja', 'template_vz08um3', form.current, 'qpdX4dZeW28udg7IE')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

  return (
    <>
    <AnimatePresence>
    <div className='container contact-page'>

     <div className="text-zone">
     <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="user_name" required autoComplete='off' />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    required
                    autoComplete='off'
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                    autoComplete='off'
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                    autoComplete='off'
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
     </div>
      

     <div className="info-map">
          Shibraj Deb
          <br />
          Durgapur,
          <br />
          National Institute of tech D<br />
          MG Road <br />
          <br />
          <span>shibrajdeb456@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[23.19, 87.19]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[23.32, 87.19]}>
              <Popup>Shibraj lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
    </div>
    </AnimatePresence>
    <Loader type='pacman' />
    </>
  )
}

export default Contact
