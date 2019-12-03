import React, { Component } from 'react';
import TicketPanel from './TicketPanel';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Tickets extends Component {

    state = {
        tickets : [
            {
                id: 7,
                status: 'open',
                title: 'Bug 1',
                description: 'Theres a problem in blah blah blah',
                author: 'Dev 1',
                category: 'Back end',
                createdAt: '11-30-2019',
            },
            {
                id: 2,
                status: 'in progress',
                title: 'Bug 2',
                description: 'Found a bug in the dashboard',
                author: 'Dev 1',
                category: 'Back end',
                createdAt: '11-30-2019',
            },
            {
                id: 1,
                status: 'in progress',
                title: 'Bug 4',
                description: 'Found a bug in the tickets page',
                author: 'Dev 1',
                category: 'Back end',
                createdAt: '11-30-2019',
            },
            {
                id: 4,
                status: 'closed',
                title: 'Bug 3',
                description: 'Hard time finding the ',
                author: 'Dev 1',
                category: 'Back end',
                createdAt: '11-30-2019',
            }

        ]
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
