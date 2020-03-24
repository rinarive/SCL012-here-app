import React from 'react';


class BadgeForm extends React.Component {
    state = {};

    handleClick = e => {
        console.log('button was clicked');
    };
    handleSubmit = e => {
        e.preventDefault();
        console.log("boton funciona");
        console.log(this.state);
    };
    render() {
        return (
            <div >
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label> First Name</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                        />
                    </div>

                    <div className="form-group">
                        <label> Last Name </label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                        />
                    </div>

                    <div className="form-group">
                        <label> Email</label>
                        <input onChange={this.props.onChange}
                            className="form-control"
                            type="email"
                            name="Email"
                            value={this.state.Email}
                        />
                    </div>

                    <button
                        onClick={this.handleClick}
                        className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}
export default BadgeForm;
