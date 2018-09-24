import React from 'react';

export default class Insert extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newTitle:'',
            newDescription:'',
            showNewTODO: false,
            notTODO: false
        }

        this.insertNewTodo = this.insertNewTodo.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
        this.handleTextChangeTitle = this.handleTextChangeTitle.bind(this);
        this.handleTextChangeDescription = this.handleTextChangeDescription.bind(this);
    }

    //envia props para o pai
    insertNewTodo = () => {
        const title = this.state.newTitle;
        const description = this.state.newDescription;
        this.props.newTODO(title, description);
    }

    HandleSubmit(event) {

        if(this.state.newTitle === '' || this.state.newDescription === ''){
            event.preventDefault();
            this.setState({ notTODO: true });
            this.setState({ showNewTODO: false });
            return;
        }
               
        event.preventDefault();
        this.insertNewTodo();
        
        this.setState({ notTODO: false });
        this.setState({ showNewTODO: true });
        this.setState({ newTitle: '' });
        this.setState({ newDescription: '' });
    }    

    handleTextChangeTitle(event) {
        this.setState({ newTitle: event.target.value });//pegando valor do input
    }

    handleTextChangeDescription(event) {
        this.setState({ newDescription: event.target.value });//pegando valor do input
    }

    render(){
        return(
            <div>
                <form id = "insertBox" onSubmit = {this.HandleSubmit}>
                    <h2>Title:</h2>
                    <input value = {this.state.newTitle}  onChange = {this.handleTextChangeTitle}/>
                    <h2>Description:</h2>
                    <input value = {this.state.newDescription} onChange = {this.handleTextChangeDescription}/>
                    <br></br>
                    <button type="submit">submit</button>
                    {this.state.showNewTODO && 
                        <div>
                            <h2>New TODO created</h2>
                        </div>
                    }
                    {this.state.notTODO && 
                        <div>
                            <h2>title or description blank</h2>
                        </div>
                    }
                </form>  
          
            </div>
        );
    }
}