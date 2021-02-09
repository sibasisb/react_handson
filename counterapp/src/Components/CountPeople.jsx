import React,{Component} from 'react';
import '../Stylesheets/mystyle.css';

export class CountPeople extends Component {
    constructor(props){
        super(props);
        this.state={
            entrycount:0,
            exitcount:0
        };
        this.updateEntry=this.updateEntry.bind(this);
        this.updateExit=this.updateExit.bind(this);
    }

    updateEntry(){
        this.setState((state)=>({
            entrycount:state.entrycount+1
        }));
    }

    updateExit(){
        this.setState((state)=>({
            exitcount:state.exitcount+1
        }));
    }

    render(){
        return (
            <div className="mybuttons">
                <div>
                <button onClick={this.updateEntry}>Login</button>
                <span>{this.state.entrycount} people entered!!!</span>
                </div>
                <div>
                <button onClick={this.updateExit}>Exit</button>
                <span>{this.state.exitcount} people left!!!</span>
                </div>
            </div>
        );
    }

}