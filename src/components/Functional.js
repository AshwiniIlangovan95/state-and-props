function Home(){
    return "Hello world";
}
<hr/>
function Greeting(props){
    // const {children}=props;
    return(
        <div>
        <h1>Welcome {props.name} </h1>
        {/* {props.children} */}
        </div>
    ) 
    
}

export {Home, Greeting};