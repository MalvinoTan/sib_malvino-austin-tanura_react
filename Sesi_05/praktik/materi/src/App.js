import './App.css';
import { ReactDemo } from './ReactDemo';
import { ListPeople } from './ListPeople';
import { Component } from 'react';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      peoples: [
        {
          name: 'Obi Wan',
          status: 'Jedi'
        },
        {
          name: 'Luke Skywalker',
          status: 'Padawan'
        }
      ]
    }
  }
  render () {
    return (
      <>
        <ReactDemo />
        <ListPeople people={this.state.peoples} />
      </>
    )
  }
}

export default App;
