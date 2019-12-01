import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ViewTicket extends Component {

    render() {

        const tickethandle = this.props.match.params.tickethandle;

        return (
            <React.Fragment>
                {/* <!-- Page Heading --> */}
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Ticket number {tickethandle}</h1>
                    <Link to="/tickets" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">All Tickets</Link>
                </div>
            </React.Fragment>
        )
    }
}

export default ViewTicket
