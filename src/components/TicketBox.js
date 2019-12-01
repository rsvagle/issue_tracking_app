import React, { Component } from 'react'

export class TicketBox extends Component {
    render() {
        return (
            <React.Fragment>
                 {/* <!-- Ticket Type Card --> */}
                 <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            {this.props.data.title}
                        </div>

                        <div class="card-body">
                            Ticket Number: {this.props.data.id}<br />
                            Date: {this.props.data.createdAt}<br />
                            Author: {this.props.data.author}<br />
                            Description: {this.props.data.description}<br />
                        </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TicketBox
