import React, { Component, useState, useEffect } from 'react';
import TicketBox from './TicketBox';


export class TicketPanel extends Component {

    state = {
        tickets : this.props.tickets
    }

    getButtonType = () => {
        if(this.props.ticketType==='Open'){
            return 'btn btn-danger disabled';
        } else if(this.props.ticketType==='In Progress'){
            return 'btn btn-warning disabled';
        } else if(this.props.ticketType==='Closed'){
            return 'btn btn-success disabled';
        } else {
            return 'btn';
        }
    }

    render() {
        return (
            <React.Fragment>
                {/* <!-- Content Column --> */}
                <div class="col-lg-4 mb-4">

                    {/* <!-- Ticket Type Card --> */}
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <span className={this.getButtonType()} >{this.props.ticketType}</span>
                        </div>

                        <div class="card-body">
                            {/* Get the tickets that match */}

                            {(() => {
                                const rows = [];
                                for (let i = 0; i < this.state.tickets.length; i++) {
                                    rows.push(<TicketBox key={i} data={this.state.tickets[i]} />);
                                }
                                return rows;
                            })()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TicketPanel
