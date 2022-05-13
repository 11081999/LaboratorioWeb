import React from 'react'
import Airbnb from "../img/airbnb-logo.png"
import World from "../img/world.svg"
import Menu from "../img/menu.svg"

class Header extends React.Component {
  render(){
    return <header>
        <a href="#."><img src={Airbnb} class='airbnb-logo' /></a>
        <nav>
            <h1>Become a Host</h1>
            <img src={World} />
            <div class="user">
                <img src={Menu} class="menu" />
                <img src="https://picsum.photos/200" class="user-pic" />
            </div>
        </nav>
    </header>
  }
}

export default Header