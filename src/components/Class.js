import { Component } from "react";

class Hello extends Component{
    render(){
        return <p>hello {this.props.name}</p>
    }
}

export default Hello;