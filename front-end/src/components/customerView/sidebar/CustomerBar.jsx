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

class CustomerBar extends React.Component {

  handleRedirect(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <List component="nav">
          <Button onClick={() => this.handleRedirect('/customer/home')} variant="outlined" size="small" color="primary" fullWidth>
            <ListItem>
              <ListItemText primary={"Home Page"} />
            </ListItem>
            <Divider />
          </Button>
          <br />
          <br />
          <Button onClick={() => this.handleRedirect('/customer/cart')} variant="outlined" size="small" color="primary" fullWidth Boolean>
            <ListItem>
              <ListItemText primary={"Shopping Cart"} />
            </ListItem>
            <Divider />
          </Button>
          <br />
          <br />
          <Button onClick={() => this.handleRedirect('/customer/orders')} variant="outlined" size="small" color="primary" fullWidth>
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

export default withRouter(CustomerBar);