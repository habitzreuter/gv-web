import React, { Component } from 'react';

import API_URL from './Api.js'


class TaskEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      task: []
    };
  }

  componentDidMount() {
    fetch(API_URL + 'tasks/' + this.props.match.params.id)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            task: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, task } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <p>{task.number} - {task.title}</p>
        </div>
      );
    }
  }
}

export default TaskEditor;
