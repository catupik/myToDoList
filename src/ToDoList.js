import { Component } from "react";
import paw from './pet-care.png'

export class ToDoList extends Component{
    state = {
        userInput: "",
        toDoList: []
    }

    onChangeEvent(e){
        this.setState({userInput: e})
    }

    addDo(input){
        if (input === ""){
            alert("Don't be lazy! :)")
        } else{
            let listArray = this.state.toDoList;
            this.setState({ToDoList: listArray,userInput: ''})
            listArray.push(input);
        }
    }
    crossDo(event){
        const li = event.target;
        li.classList.toggle('crossed');
    }

    delteDo(){
        let listArray = this.state.toDoList;
        listArray = [];
        this.setState({toDoList: listArray});
    }
    onFormSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <div className="container">
                        <input placeholder="todotodotodoooooo"
                        type="text"
                        onChange={(e)=>{this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput}/>
                        </div>
                        <div className="container">
                        <button className="add btn" onClick={()=> this.addDo(this.state.userInput)}>Add</button>
                        </div>
                        <ul>
                            {this.state.toDoList.map((item, index)=>(
                                <li onClick={this.crossDo} key={index}>
                                <img src={paw} width='30' alt="paw"/>    
                                    {item}</li>
                            ))}
                        </ul>
                    <div className="container">
                    <button className="delete btn" onClick={()=> this.delteDo()}>Delete</button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }




}