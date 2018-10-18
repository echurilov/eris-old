import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'name': '',
    }
    this.createChannel = this.createChannel.bind(this);
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

  createChannel(e) {
    e.preventDefault();
    // this.props.clearErrors();
      // console.log(this.state);
    this.props.createChannel(this.state)
    .then(data => this.props.history.push(`/channels/${this.props.channels.current.id}/${data.channel.id}`));
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
    const channelError = this.props.errors.channelErrors.channel ? "error" : "";

    return(
      <div className="channel-form">
        <form className="channel-form">
          <section className={`channel-field ${channelError}`}>
            <label htmlFor="name" className="form-label">Channel Name</label>
            <input
              id="name"
              className="channel-input"
              type="name"
              value={this.state.name}
              onChange={this.update('name')}
              />
          </section>
          <button
            className="channel-button"
            type="createChannel"
            onClick={this.createChannel}>
            Create Channel
          </button>
        </form>
      </div>
    )
  }
}

export default withRouter(ChannelForm);
