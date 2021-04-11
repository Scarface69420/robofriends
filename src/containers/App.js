import React from "react";
import CardList from "../components/CardList";

import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import AddName from "../components/AddName";
import Navigation from "../components/Navigation";
// import axios from "../axios";
import { robots } from "../robots";

class App extends React.Component {
  state = {
    route: "home",
    robots: [],
    searchField: "",
  };

  componentDidMount() {
    // axios
    //   .get("/users.json")
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .then((users) => {
    //     console.log(users);
    //     // this.setState({ robots: users });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => this.setState({ robots: users }));
    this.setState({ robots: robots });
  }

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return !this.state.robots.length ? (
      <h1 className='tc'>Loading...</h1>
    ) : this.state.route === "home" ? (
      <div className='tc'>
        <Navigation onRouteChange={this.onRouteChange} />
        <h1 className='f2'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        {/* <hr className='b--light-purple w-90' /> */}
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    ) : (
      <div>
        <AddName onRouteChange={this.onRouteChange} />
      </div>
    );
  }
}

export default App;
