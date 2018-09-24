import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Insert from './insert';
import TODOBlock from './todoBlock';
import firebase from 'firebase';

export default class Core extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            TODOList: [],
            id: [],
            visibleTODOs: 0,
            showMoreButton: false
        };    

        this.deleteTODO = this.deleteTODO.bind(this);
    }
   

    componentDidMount() { 
        firebase.database().ref('TODOList').on('value', snap => {
            const todos =  snap.val();
            const newState = [];           
            for(let item in todos) {
                newState.push({
                    id: item,
                    title: todos[item].title,
                    description: todos[item].description
                })            
            }
            this.setState({
                TODOList: newState
            })
           
        })  
    }
   
    addNewTODO = (newTitle, newDescription) => {   
        const newTodo = {title: newTitle, description: newDescription};
        firebase.database().ref().child('TODOList/').push(newTodo);
    }

    getEditedTODO = (editedTitle, editedDescription, todoId) => {
        const editedTodo = {
            title: editedTitle,
            description: editedDescription
        };
        firebase.database().ref().child(`TODOList/${todoId}`).update(editedTodo);
    }

    deleteTODO = (todoId) => {
        firebase.database().ref().child(`TODOList/${todoId}`).remove();
    }
    
    render(){
        return(
            <div>
                <Tabs defaultIndex={0}>
                    <TabList id = "navBar">
                        <Tab className = "navButtons">All TODO's</Tab>
                        <Tab className = "navButtons">New TODO's</Tab>
                    </TabList>

                    <TabPanel>          
                        {this.state.TODOList.map((info, index)=>{
                            return <TODOBlock key = {index} todoid = {info.id} title = {info.title}  description = {info.description} //key é reservado e n pode ser usado como props por isso o uso do index...
                            itemID = {info.id} flagDelete = {this.deleteTODO} editedTODO = {this.getEditedTODO}/>
                        })}       
                    </TabPanel>
                        
                    <TabPanel>
                        <Insert newTODO = {this.addNewTODO}/>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}
