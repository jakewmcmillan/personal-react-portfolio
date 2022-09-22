import React from 'react';

export default function Contact() {
    return (
        <form class="m-5">
            <h3>Contact Me:</h3>
            <div class="form-group m-5">
                <label for="inputEmail">Name:</label>
                <input type="name" class="form-control" id="inputName" aria-describedby="name" placeholder="Enter Your Name"></input>
            </div>
            <div class="form-group m-5">
                <label for="inputEmail">Email:</label>
                <input type="email" class="form-control" id="inputEmail" aria-describedby="email" placeholder="Enter Your Email Adress"></input>
            </div>
            <div class="form-group m-5">
                <label for="inputMessage">Message:</label>
                <input type="message" class="form-control" id="inputMessage" aria-describedby="message" placeholder="Enter Your Message"></input>
            </div>
            <button type="submit" class="btn btn-primary m-5">Submit</button>
        </form>
    );
}