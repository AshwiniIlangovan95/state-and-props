function Destructuring(props){
    const {name, lastname} = props;
    (()=>console.log(name))();

    return <div>
        <h3>Destructuring Props</h3>
        <h4>Functional Component</h4>
        <p>welcome {name} {lastname}</p>
    </div>
}

export default Destructuring