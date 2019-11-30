import React, { Component } from 'react'

export class ContactForm extends Component {
    render() {
        return (
            <div>
                <p>Contact Me</p>
                <div>
                <form className="user" action="/action_page.php">
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control form-control-user" id="fname" name="firstname" placeholder="Your name.." />
                        <label>Last Name</label>
                        <input type="text" className="form-control form-control-user" id="lname" name="lastname" placeholder="Your last name.." />
                    
                    
                        <label>Email</label>
                        <input type="email" className="form-control form-control-user" id="email" name="email" placeholder="Your email" />
                    
                    
                        <label>Subject</label>
                        <textarea id="subject" className="form-control form-control-user" name="subject" placeholder="Write something.."></textarea>
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default ContactForm
