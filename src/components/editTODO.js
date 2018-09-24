import React from 'react';

export default class Edit extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newTitle: this.props.title,
            newDescription: this.props.description,
            showEditBox: this.props.showEditBox,
            showBlankError: false
        }

        this.handleTextChangeTitle = this.handleTextChangeTitle.bind(this);
        this.handleTextChangeDescription = this.handleTextChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextChangeTitle = (event) => {
        this.setState({newTitle: event.target.value});
    }

    handleTextChangeDescription = (event) => {
        this.setState({newDescription: event.target.value});
    }

    handleSubmit = (event) => {
        if(this.state.newTitle === '' || this.state.newDescription === '') {
            this.setState({showBlankError: true});
            event.preventDefault();
            return;
        }

        event.preventDefault();

        const title = this.state.newTitle;
        const description = this.state.newDescription;

        this.props.showEditBox(false);
        this.props.todo(title, description);
    }


    render() {
        return(
            <div id = "editBox">             
                <h2>Editing TODO</h2>
                <form onSubmit = {this.handleSubmit}>
                    <h2>New title: </h2>
                    <input value =  {this.state.newTitle}  onChange = {this.handleTextChangeTitle}/>
                    <h2> New description: </h2>
                    <input value = {this.state.newDescription}  onChange = {this.handleTextChangeDescription}/>
                    <button type ='submit'>submit</button>
                </form>

                {this.state.showBlankError && <h2>Title or description blank</h2>}

            </div>    
        );
    }
}
