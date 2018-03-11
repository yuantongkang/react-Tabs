import React from 'react';
import { render } from "react-dom";
export let Tab = (props) =>{
  return props.children
}
export default class Tabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {index: 0}
    }

    render() {
        let a = React.Children.map(this.props.children, (element, index) => {
            return (<div className="tab-title-item"  
            onClick={()=>this.setState({index:index})}
            className={this.state.index===index?"tab-title-item active" : "tab-title-item"} 
            >{element.props.name}</div>)
        })
        let b = React.Children.map(this.props.children, (element, index) => {
            return (<div className="tab-content-items"
            className={this.state.index===index?"active":"hidden"}
            >{element}{console.log(element)}</div>)
        })
        return(
            <div>
                {a}
                {b}
            </div>
        )
    }
}
