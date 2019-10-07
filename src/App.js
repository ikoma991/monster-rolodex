import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/Card-list/Card-list.component';
import { SearchBox } from './components/Search-box/Search-box.component';

class App extends Component{
  constructor(){
    super();
    this.state ={
      monsters:[],
      searchField: ''
    }
    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(data=>this.setState({monsters:data}));
  }

  handleChange = e =>{
    this.setState({searchField:e.target.value})
  }

  render(){
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder="Search Monsters" 
          handleChange = {this.handleChange} />
       
        <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}

export default App;
