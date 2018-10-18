import React from 'react';
import { withRouter } from 'react-router-dom';
// import MessageListContainer from '../messages/message_list_container';

class Channel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log(this.props);
    this.props.listChannels();
    if (this.props.channels.current) {
      this.props.showChannel(this.props.channels.current)
    }
    // this.props.clearErrors();
  }

  render() {
    // console.log(this.props);
    let channelName = '';
    if (this.props.channels.current) {
      channelName = this.props.channels.current.name
    }
    return(
      <div className="show-channel">
        #{channelName}
        <div>MessageListContainer</div>
      </div>
    )
  }
}

export default withRouter(Channel);
