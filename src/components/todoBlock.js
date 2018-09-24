import React from 'react';
import Edit from './editTODO';

export default class TODOBlock extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            showEditBox: false,
            title: this.props.title,
            description: this.props.description
        }
    }

    handleDelete = () => {
        this.props.flagDelete(this.props.itemID)
    }


    showEditBox = () => {
        this.state.showEditBox ?  this.setState({showEditBox: false}) : this.setState({showEditBox: true});
    }

    editTODO = (title, description) => {
        this.props.editedTODO(title, description, this.props.itemID);
    }

    handleEditFlag = (flag) => {
        this.setState({ showEditBox: flag })
    }

    render(){
        return(
            <div id = "todoBlock">               
                <h1>Task: <h2>{this.props.title} </h2> </h1>     
                <h1>Description: <h2>{this.props.description}</h2></h1>
                <button  type ='button' onClick = {this.showEditBox}>Edit TODO</button>
                <button  type = "button" onClick = {this.handleDelete}>Delete TODO</button>
                {this.state.showEditBox &&                
                    <Edit todo = {this.editTODO} title = {this.props.title} description = {this.props.description} showEditBox = {this.handleEditFlag}/>
                }           
            </div>
        );
    }
}