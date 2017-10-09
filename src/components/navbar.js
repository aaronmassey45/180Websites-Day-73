import React, {Component} from 'react';

export default class NewNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <span className="navbar-brand">{this.props.brand}</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ml-auto">
            <li><a className="nav-item nav-link" href="http://aaronmassey.pro">Home</a></li>
            <li><a className="nav-item nav-link" href="https://medium.com/@aaronmassey45">Blog</a></li>
            <li><a className="nav-item nav-link" href="https://github.com/aaronmassey45">Github</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
