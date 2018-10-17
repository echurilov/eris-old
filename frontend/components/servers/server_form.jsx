import React from 'react';

class ServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
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
    this.props.clearErrors();
    this.props.createServer(this.state);
  }

  joinServer(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.props.joinServer(this.state);
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
    // console.log(this.props);
    const serverError = this.props.errors ? "error" : "";

    return(
      <div className="show-server">
        <form className="server-form">
          <section className={`login-field} ${serverError}`}>
            <label htmlFor="name" className="form-label">Server Name</label>
            <input
              id="name"
              className="server-input"
              type="name"
              value={this.state.name}
              onChange={this.update('name')}
              />
          </section>
          <button
            className="button-server"
            type="createServer"
            onClick={this.createServer}>
            Create Server
          </button>
          <button
            className="button-server"
            type="joinServer"
            onClick={this.joinServer}>
            Join Server
          </button>
        </form>
      </div>
    )
  }
}

export default ServerForm;
