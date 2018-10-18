import React from 'react';
import ChannelListContainer from './channel_list_container';

class Channel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log(this.props);
    this.props.showChannel(this.props.channels.current);
    // this.props.clearErrors();
  }

  render() {
    // console.log(this.props);
    return(
      <div className="show-channel">
        Viewing
        <ChannelListContainer />
        <div className="channels"></div>
        <div className="messages"></div>
      </div>
    )
  }
}

export default Channel;
