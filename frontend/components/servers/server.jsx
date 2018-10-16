import React from 'react';
import ServerListContainer from './server_list_container';

const Server = () => (
  <div className="show-server">
    <ServerListContainer />
    <div className="channels"></div>
    <div className="messages"></div>
  </div>
);

export default Server;
