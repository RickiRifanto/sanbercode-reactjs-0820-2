import React, {Component} from 'react'
const event = new Date('August 19, 1975 23:15:30 GMT+00:00'); 
class Timer extends React.Component {

    render() {
  
      return (
  
        <div>
  
          <h1>Hello, world!</h1>
  
          <h2>It is {event.toLocaleTimeString('en-US')}.</h2>
  
        </div>
  
      );
  
    }
  
  }

export default Timer