import React from 'react';
import {
  Card,
  CardHeader,
  IconButton,
  CardContent,
  TextField, Divider
      } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import "./Card.css";
const axios = require('axios').default;

class EmptyDish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishName: "",
      imageUrl: "",
      price : 0
    }
    this.addToMenu = this.addToMenu.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addToMenu(event) {
    event.preventDefault();
    axios.post("/api/restaurant/addToMenu", {
      restaurantId : this.props.currentUser.id,
      dishName : this.state.dishName,
      imageUrl : this.state.imageUrl,
      price : this.state.price
    }).then(
      response => {
        this.props.getAllDishes();
        this.setState({dishName : "", imageUrl : "", price : 0})
      }
    ).catch(err => console.log(err));
  }

  handleChange(content) {
    this.setState(content);
  }

  render() {
    return this.props.currentUser ? (
      <Card>
        <CardHeader
          style={{backgroundColor: "#708090", height: "auto"}}
          titleTypographyProps={{variant:'body1'}}
          title={<i>Provide the foodbox detail</i>}
          subheader="Click [+] for more details "
        />
        <CardContent>
          <form onSubmit={this.addToMenu}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="FoodBox Name"
              type="text"
              value={this.state.dishName}
              autoFocus
              onChange={event => this.handleChange({dishName: event.target.value})}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="FoodBox Image URL"
              type="text"
              value={this.state.imageUrl}
              onChange={event => this.handleChange({imageUrl: event.target.value})}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="$ Foodbox Price"
              type="number"
              value={this.state.price}
              onChange={event => this.handleChange({price: event.target.value})}
            />
            <Divider />
            <IconButton type="submit">
              <AddIcon />
            </IconButton>
          </form>      
        </CardContent>
      </Card>
    ) : <div />;
  }
}

export default EmptyDish;