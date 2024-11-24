import "./contact.css";
import { useState } from "react";
import axios from "axios";

const Contact = () =>{
    const [name,setName] = useState("")
    const [contactNumber,setContactNumber] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] =useState("")


    async function handleSubmitForm(event) {
        event.preventDefault(); // Prevent default form submission

        // Gather form data

        // Validate form fields
        if (!name || !contactNumber || !email || !message) {
            alert('All fields are required.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!validatePhoneNumber(contactNumber)) {
            alert('Please enter a valid phone number. It should contain only digits and be at least 10 characters long.');
            return;
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/post/save`, { name, contactNumber, email, message });
            // console.log(response.data);
            alert('Form submitted successfully!');
        } catch (error) {
            console.error("Error submitting form:", error);
        }
        // Simulate sending data (you can replace this with an API call)

        // Clear the form after successful submission
        setName("");
        setContactNumber("");
        setEmail("");
        setMessage("");
    };

// Utility function to validate email
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

// Utility function to validate phone number
    function validatePhoneNumber(phone) {
        const phonePattern = /^\d{10}$/; // Adjust the range as needed (10-15 digits)
        return phonePattern.test(phone);
    }



    return(
        <div class="arch_contact_us_duplicate">
            <div class="responsive-container-block big-container">
                <div class="responsive-container-block container">
                    <div class="responsive-cell-block wk-mobile-12 wk-desk-5 wk-tab-10 wk-ipadp-5" id="ih6s">
                        <p class="text-blk section-head">
                            Get in touch
                        </p>
                        <p class="text-blk section-subhead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div class="responsive-cell-block wk-ipadp-6 wk-mobile-12 wk-desk-5 wk-tab-9" id="i6df">
                        <form id="contactForm" class="form-wrapper" onSubmit={handleSubmitForm}>
                            <label for="name">Name</label>
                            <input class="input input-element" type="text" id="name" name="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
                            
                            <label for="contactNumber">Contact Number</label>
                            <input maxLength="10" class="input input-element" type="tel" id="contactNumber" name="contact_number" placeholder="Enter your contact number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required/>
                            
                            <label for="email">Email</label>
                            <input class="input input-element" type="email" id="email" name="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            
                            <label for="message">Message</label>
                            <textarea class="textinput input-element" id="message" name="message" placeholder="Write your message"   value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                            
                            <button type="submit" class="button">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;