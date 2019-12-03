import React, { Component } from 'react';
import TicketPanel from './TicketPanel';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { read } from 'fs';

export class Tickets extends Component {

    state = {
        tickets : []
    }

    componentDidMount(){
        axios.get(api/ticket/read.php)
            .then(res => this.setState({tickets : res.data}));
    }

    getOpenTickets = () => {
        return this.state.tickets.filter(ticket => (ticket.status === 'open'));
    }

    getInProgressTickets = () => {
        return this.state.tickets.filter(ticket => (ticket.status === 'in progress'));
    }

    getClosedTickets = () => {
        return this.state.tickets.filter(ticket => (ticket.status === 'closed'));
    }

    render() {
        return (
            <React.Fragment>
                {/* <!-- Page Heading --> */}
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Tickets</h1>
                    <Link to="/create_ticket" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Create New Ticket</Link>
                </div>

                {/* <!-- Content Row --> */}
                <div class="row">
                      <TicketPanel ticketType='Open' tickets={this.getOpenTickets()}/>
                      <TicketPanel ticketType='In Progress' tickets={this.getInProgressTickets()} />
                      <TicketPanel ticketType='Closed' tickets={this.getClosedTickets()}/>
                </div>
            </React.Fragment>
        )
    }
}

export default Tickets
