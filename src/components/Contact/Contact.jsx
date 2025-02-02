import React from "react";
import "./Contact.css"
import Layout from "../Layout/Layout"

const Contact = () =>{
    return(
        <>
        <Layout>
            <div className="text">
                <p>Choose one of this ways to contact me</p>
            </div>
            <div className="contact">
                <div className="contact--form">
                    <form action="post" method="post">
                        <input type="email" name="email" id="" placeholder="Email" />
                        <input type="text" name="fullName" id="" placeholder="Full name"/>
                        <input type="text" name="company" id="" placeholder="Company"/>
                        <textarea name="message" id="" placeholder="Message"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="contact--line"></div>
                <div className="contact--buttons">
                    <a href=""><button>Telegram</button></a>
                    <a href=""><button>Email</button></a>
                </div>
            </div>
        </Layout>
        </>
    )
};
export default Contact;