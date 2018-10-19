# README

Eris is a clone of the chat app Discord. Users can create accounts and log in. Once logged in, they can create servers and view the list of servers they are in.

Eris can be found at https://eris-chat.herokuapp.com

Eris is built with a PostgreSQL database, a Rails backend, and a React/Redux frontend.

Users can log in to the site user a demo account, or they can register an account using their email.

```js
handleSubmit(e) {
  e.preventDefault();
  this.props.clearErrors();
  this.props.processForm(this.state);
}

handleDemo(e) {
  e.preventDefault();
  const demoUser = { email: 'athena@pantheon.io', password: 'pallas'};
  this.props.demoLogin(demoUser)
}
```

If there are any errors in the registration or login process, it displays them cleanly next to the relevant fields so that the user can correct them. Only one error per field is displayed at a time.

```js
renderError(type) {
  let errorList = [];
  let errorItem = "";
  Object.entries(this.props.errors).map((entry) => {
    errorList = errorList.concat(Object.entries(entry[1]))
  })
  errorList.forEach((error) => {
    if (type === error[0] && error[1] != null) {
      errorItem = <span className="error-item"> - {error[1][0]}</span>
    }
  })
  return(errorItem);
}
```

Once logged in, users are directed to a home page, where an index of servers is displayed in a sidebar.

```js
render() {
  let serverList = [];
  let newChannel;
  let activeServer;
  if (this.props.servers.joined) {
    serverList = Object.values(this.props.servers.joined).map((server) => {
      activeServer = (this.props.servers.current == server.id) ? 'active-server' : '';
      if (server.id == this.props.user.home) {
        newChannel = '/channels/@me';
      } else {
        newChannel = `/channels/${server.id}`;
      }
      return(
        <li key={server.id} className="server-list-item">
          <Link className={`server-link ${activeServer}`} to={newChannel}></Link>
          <span className="server-link-info">{server.name}</span>
        </li>
      )
    })
  }
  return(
    <ul className="server-list">
      {serverList}
      <ServerFormContainer />
    </ul>
  )
}
```

Users start with a home server and can create additional ones.

```rb
def create
  @user = User.new(user_params)
  user.home = Server.create('owner_id': @user.id, 'name': 'Home')
  if @user.save
    login!(@user)
    render 'api/users/show'
  else
    render json: @user.errors.messages, status: 422
  end
end
```

Hovering on a server icon will reveal its name, and clicking on it will navigate to the server's page. Navigating to `/channels/@me` takes the user to their home server.

```js
shouldComponentUpdate(nextProps, nextState) {
  if (this.props.match.params.serverId === nextProps.match.params.serverId) {
    return false;
  } else {
    return true;
  }
}

componentDidUpdate() {
    if (this.props.match.path === '/channels/@me') {
      this.props.showServer(this.props.user.home)
    } else if (this.props.match.params.serverId == this.props.user.home) {
      this.props.showServer(this.props.match.params.serverId)
        .then(data => this.props.history.push(`/channels/@me`));
    } else {
      this.props.showServer(this.props.match.params.serverId);
    }
}
```

Some planned additional features include:
* List of channels per server
* List of messages per channel
* Ability to send and receive messages
* Private message channels on the user's home server
