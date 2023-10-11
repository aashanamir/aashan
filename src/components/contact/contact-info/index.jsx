import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import "./style.scss";

const ContactInfo = () => {
  return (
    <div className="class-info-box">
        <h4>I would happy To Answer Any Questions regarding Web Development</h4>
        <div className="contact-option">
            <LocalPhoneIcon/>
            <span className="text">+92 3246002877</span>
        </div>
        <div className="contact-option">
            <EmailIcon/>
            <span className="text">emailstormfacts@gmail.com</span>
        </div>
    </div>
  )
}

export default ContactInfo
