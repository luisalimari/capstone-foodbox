import React from 'react';
import { Link, withRouter } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Button
}
from '@material-ui/core';

class RestaurantBar extends React.Component {
  handleRedirect(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <List component="nav">
          <Button onClick={() => this.handleRedirect('/restaurant/home')} variant="outlined" size="small" color="primary" fullWidth>            <ListItem>
              <ListItemText primary={"Home Page"} />
            </ListItem>
            <Divider />
          </Button>
          <br />
          <br />
          <Button onClick={() => this.handleRedirect('/restaurant/information')} variant="outlined" size="small" color="primary" fullWidth>
            <ListItem>
              <ListItemText primary={"Restaurant Details"} />
            </ListItem>
            <Divider />
          </Button>
          <br /> 
          <br />
          <Button onClick={() => this.handleRedirect('/restaurant/menu')} variant="outlined" size="small" color="primary" fullWidth>
            <ListItem>
              <ListItemText primary={"Menu"} />
            </ListItem>
            <Divider />
          </Button>
          <br />
          <br />
          <Button onClick={() => this.handleRedirect('/restaurant/order')} variant="outlined" size="small" color="primary" fullWidth>
            <ListItem>
              <ListItemText primary={"Active Orders"} />
            </ListItem>
            <Divider />
          </Button>
          <br />
          <br />
           </List>
      </div>
    );
  }
}

export default withRouter(RestaurantBar);