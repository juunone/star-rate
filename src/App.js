import React, { Component } from 'react';
import StarRate from './StarRate';

class App extends Component {
  state = {
    idx:0,
    rating: 0,    
    cacheIdx: 0,
    cacheRating: 0,
  }

  _mouseOver = (e,i) => {
    e.persist()
    let offsetX = e.nativeEvent.offsetX; 
    let clientX = e.target.clientWidth;

    if(offsetX > clientX / 2){
      let value = 2;
      this.setState({
        idx:i,
        rating:value
      });
    }else{
      let value = 1;
      this.setState({
        idx:i,
        rating:value
      });
    }
  }

  handleChange = (i,v) => {
    this.setState({
      idx:0,
      rating:0,
      cacheIdx:i,
      cacheRating:v
    });
  }

  render() {
    return (
      <StarRate 
        _mouseOver={this._mouseOver}
        onChange={this.handleChange} 
        idx={this.state.idx} 
        rating={this.state.rating}         
        cacheIdx={this.state.cacheIdx}         
        cacheRating={this.state.cacheRating} 
      />
    );
  }
}

export default App;