import React, { useState } from 'react'
import './Footer.css'

const Footer = () => {
    const [subject, updateSubject] = useState('');
    const [messege, updateMessege] = useState('');

    const inputChangeHandler = (event, value) => {
        switch (value) {
            case 'subject':
                updateSubject(event.target.value);
                break;
            case 'messege':
                updateMessege(event.target.value);
                break;
            default: return;
        }
    }

    const submit = () => {
        const myEmail = 'shano.bensal@mail.huji.ac.il';
        window.location.href =
            `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${subject}&body=${messege}`;
    }

    return (
        <div className="contect-me">
            <h2>Get In Touch</h2>
            <div className="input-contact flex flex-colom justify-space-between align-items-center">
                <input type="text" onChange={event => inputChangeHandler(event, 'subject')} placeholder="Subject" />
                <textarea type="text" onChange={event => inputChangeHandler(event, 'messege')} className="messege" placeholder="Write your messege here..." />
            </div>
            <div className="submit-btn flex ">
                <button onClick={submit}>Send</button>
            </div>
            <div className="button-bottom">
                <ul className="flex justify-center margin-zero text-align-center list-item social-buttons">
                    <li>
                        <a className="social-buttons facebook" href="https://www.facebook.com/shani.bensal">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a className="social-buttons linkedin" href="https://linkedin.com/in/shani-bensal-95a78b139">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li>
                        <a className="social-buttons github" href="https://github.com/shaniBensal">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;