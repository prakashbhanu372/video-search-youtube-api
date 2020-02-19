import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    vidSearch: ""
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onchange(this.state.vidSearch);
  };

  onFormChange = e => {
    this.setState({ vidSearch: e.target.value });
  };

  render() {
    return (
      <div className="form-group">
        <form onSubmit={this.onFormSubmit}>
          <input
            className="form-control"
            type="text"
            value={this.state.vidSearch}
            onChange={this.onFormChange}
          />
        </form>
      </div>
    );
  }
}

export default Searchbar;
