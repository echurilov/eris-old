import React from 'react';
import { withRouter } from 'react-router-dom';

class ServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'name': '',
    }
    this.createServer = this.createServer.bind(this);
    this.joinServer = this.joinServer.bind(this);
  }

  componentDidMount() {
    // console.log(this);
    // this.props.clearErrors();
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }

  createServer(e) {
    e.preventDefault();
    // this.props.clearErrors();
      // console.log(this.state);
    this.props.createServer(this.state)
      .then(data => this.props.history.push(`/channels/${data.server.id}`));
  }

  joinServer(e) {
    e.preventDefault();
    // this.props.clearErrors();
    this.props.joinServer(this.state)
      .then(data => this.props.history.push(`/channels/${data.server.id}`));
  }

  // renderError(type) {
  //   let errorList = [];
  //   let errorItem = "";
  //   Object.entries(this.props.errors).map((entry) => {
  //     errorList = errorList.concat(Object.entries(entry[1]))
  //   })
  //   errorList.forEach((error) => {
  //     if (type === error[0] && error[1] != null) {
  //       errorItem = <span className="error-item"> - {error[1][0]}</span>
  //     }
  //   })
  //   return(errorItem);
  // }

  render() {
    const serverError = this.props.errors.serverErrors.server ? "error" : "";

    return(
      <form className="server-form">
        <section className={`server-field ${serverError}`}>
          <label htmlFor="name" className="server-name">Server Name</label>
          <input
            id="name"
            className="server-input"
            type="name"
            value={this.state.name}
            onChange={this.update('name')}
            />
        </section>
        <button
          className="server-button"
          type="createServer"
          onClick={this.createServer}>
          +
        </button>
      </form>
    )
  }
}

export default withRouter(ServerForm);
