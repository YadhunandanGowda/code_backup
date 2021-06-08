import React , {useState, Component}from 'react';

// function formComp (props) {
//     let [name ,setName] = useState("yadhu");
//     let i = 0;
//     return (
//     <div>
//     <h1>{props.name}</h1>
//     <input type="text" value={name} onKeyDown={e=> setName(e.target.value)} key={name} onBlur={e=> setName(e.target.value)}/>
//     <button onClick={()=> props.clbkFcn(name)}>
//         click
//     </button>
//     </div>)
// }

class formComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            log: true
        }
    }
    changemessage(){
        this.setState((prevState) => ({ count: prevState.count +1}), ()=>{console.log("done")})
    }

    fiveTimes(){
        this.changemessage()
        this.changemessage()
        this.changemessage()
        this.changemessage()
        this.changemessage()
    }

    form() {

    }

    render() {
        let message ;

        if(this.state.log) {
            message = <div>Yadhu</div>;
        }else {
            message = <div>Madhu</div>;
        }
        return (
            <div>
                <h1>{this.props.name}</h1>
                <button onClick={()=>{this.props.clbkFcn("madhu")}}>Click</button>
                <div>{message}</div>
            </div>
        )
    }
}

export default formComp;