import React from "react";
import CardList from "../components/CardList";

import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import AddName from "../components/AddName";
import Navigation from "../components/Navigation";

class App extends React.Component {
  state = {
    route: "home",
    robots: [],
    searchField: "",
    signedIn: true,
  };

  componentDidMount() {
    fetch("https://robofriends-8d500-default-rtdb.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((responseData) => {
        const robots = [];
        for (const key in responseData) {
          robots.push({
            id: key,
            name: responseData[key].name,
            email: responseData[key].email,
          });
          console.log(robots);
        }
        this.setState({ robots: robots });
      });
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
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedIn={this.state.isSignedIn}
        />
        <h1 className='f2'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        {/* <hr className='b--light-purple w-90' /> */}
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    ) : (
      <div>
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedIn={this.state.isSignedIn}
        />
        <AddName onRouteChange={this.onRouteChange} />
      </div>
    );
  }
}

export default App;
