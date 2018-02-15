import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectColor} from '../actions/index';
import {bindActionCreators} from 'redux';
import {createAnswer} from '../actions/answer'

class ColorList extends Component{
    
    componentDidMount(){
        this.props.createAnswer(this.props.colors)
    }
    
    
    renderColorList (){    
        let firstChoiceArray= []
        for (let k = 0; k < 2; k++) {
            firstChoiceArray.push(<div className="empty" key={"a" + k}></div>)
            for (let j = 0; j < 4; j++) {
                firstChoiceArray.push(
                    <div className="choiceBoard top" key={this.props.colors[j + k * 4]}>
                        <div className="bc choice" style={{ background: `radial-gradient(circle at 50px 50px, #000,${this.props.colors[j + k * 4]})` }} onClick={this.props.selectColor.bind(this, this.props.colors[j + k * 4])} >
                        </div>
                    </div>
                )
            }
            firstChoiceArray.push(<div id={"mycell" + k} key={"b" + k} className="choiceBoard top"></div>)
            firstChoiceArray.push(<div key={"c" + k} className="empty"></div>)
        }
        return firstChoiceArray
    }

    render(){
        return(
            <div className="grid"> {this.renderColorList()}</div> 
        )
    }

}

function mapStateToProps(state){
    return {
        colors: state.colors
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators( {selectColor, createAnswer}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorList)