import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "POSappsky">
        <ItemsList />
      </div>
    );
  }
}

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {amount:0};
    this.buy = this.buy.bind(this);
    this.show = this.show.bind(this);
  }

  show() {
    this.props.handleShow(this.props.name);
  }

  buy() {
    this.setState({amount: this.state.amount + 1});
    this.props.handleTotal(this.props.price);
  }

  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>

        <p>{this.props.description}</p>
        <button onClick={this.buy}>Buy</button>
        <button onClick={this.show}>Show</button>
        <span> ${this.props.price}</span>
        <span> (Cart: {this.state.amount} items.)</span>
        <hr/>
      </div>
    );
  }
}

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      items: [
      {name:"Pork Chop", description: "meaty", price: 540},
      {name:"Patatim", description: "meaty",  price: 700},
      {name:"Chops Stick", description: "meaty",  price: 429}
      ]
    }
    this.calculate = this.calculate.bind(this);
  }

  calculate(price) {
    this.setState({total: this.state.total+price});
  }

  showDetails(name) {
    alert("This item "+name+" is available for free shipping");
  }

  render() {
    var theThis = this;
    var items = this.state.items.map(function(item) {
      return(
          <Item name={item.name} description={item.description} price={item.price}
         handleShow={theThis.showDetails}
        handleTotal={theThis.calculate}
         />
        );
    });
    return(
      <div>
        {items}
        <Total total={this.state.total}/>
      </div>
    );
  }
}

class Total extends Component {
  render() {
    return (
      <div>
        <h3>Total: ${this.props.total}</h3>
      </div>
    )
  }
}

export default App;
