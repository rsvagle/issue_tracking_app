import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class TicketBox extends Component {

    getCardClass = () => {
        if(this.props.data.status==='open'){
            return 'card border-left-danger shadow mb-4';
        } else if(this.props.data.status==='in progress'){
            return 'card border-left-warning shadow mb-4';
        } else if(this.props.data.status==='closed'){
            return 'card border-left-success shadow mb-4';
        } else {
            return 'card shadow mb-4';
        }
    }

    render() {

        const viewTicketLink = () => {
            return '/tickets/' + this.props.data.id;
        }

        return (
            <React.Fragment>
                 {/* <!-- Ticket Type Card --> */}
                 <div class={this.getCardClass()}>
                    <div class="card-body">
                        <h5 class="card-title">
                            <Link to={viewTicketLink}>{this.props.data.title}</Link>
                        </h5>
                        Author: {this.props.data.author}<br />
                        Ticket Number: {this.props.data.id}<br />
                        Description: {this.props.data.description}<br />
                    </div>
                    <div class="card-footer">
                        <span style={{float: 'right'}}><small class="text-muted">Issue created: {this.props.data.createdAt}</small></span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TicketBox
