import React from 'react';

class ServerList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    // console.log(this.props);
    let serverList = [];
    if (this.props.servers) {
      this.props.servers.map((server) => (
        <li><Link to="{`channels/${server.id}`"}>${server.name}</Link></li>
      ))

    }
    return(
      <div className="server-list">
        <ul>
          {serverList}
        </ul>
        <form className="add-server"></form>
      </div>
    )
  }
}

export default ServerList;
