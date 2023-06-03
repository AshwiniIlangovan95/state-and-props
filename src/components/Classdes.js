import { Component } from "react";

class Exampleclassdes extends Component {
    render() {
        const {name} = this.props;
        return <div>
                <h3>Class component</h3>
                <p> Displaying my name {name} </p>
               </div>
    }
}


export default Exampleclassdes;