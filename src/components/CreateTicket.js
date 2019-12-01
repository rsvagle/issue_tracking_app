import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class CreateTicket extends Component {
    render() {
        return (
            <React.Fragment>
            {/* <!-- Page Heading --> */}
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Create a new ticket</h1>
                <Link to="/tickets" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">All Tickets</Link>
            </div>
            
            <div class="col-12 col-lg-9 col-xl-6">

                <div class="card shadow h-100">
                    <div class="card-header bg-danger">
                    </div>
                    <div class="card-body">
                        <form className="user" action="/action_page.php">
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control" id="fname" name="firstname" placeholder="Enter your title..." />
                            </div>
                            <div className="form-group"> 
                                <label>Category</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="Enter your category..." />
                            </div>
                            <div className="form-group">    
                                <label>Description</label>
                                <textarea id="subject" className="form-control" name="subject" placeholder="Describe your issue..."></textarea>
                            </div>
                    
                            <input type="submit" value="Submit" className="btn btn-danger"/>
                        </form>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default CreateTicket
