import React, { Component } from 'react';
import { TodoListItem } from './TodoListItem';

export class TodoList extends Component {
    state = {
        taskItems : [
            {
                id: 1,
                name: 'Task 1',
                status: 'pending',
            },
            {
                id: 2,
                name: 'Task 2',
                status: 'pending',
            },
            {
                id: 3,
                name: 'Task 3',
                status: 'pending',
            }
        ]
    } 

    
    render() {

        const handleOnToggleCompleted = (taskId, event) => {
            this.setState({
                taskItems: this.state.taskItems.map(task => {
                    if(task.id === taskId){                        
                        return {...task, status: event.target.checked ? 'completed': 'pending' }
                    }
        
                    return task;
                })
            })           
    
            console.log(this.state.taskItems);
        }    
        return(
            <ul>
                {this.state.taskItems.map(task => (
                    <li>
                        <TodoListItem  onToggleCompleted={handleOnToggleCompleted}{... task} />                    
                    </li>
                ))}
            </ul>
        )
    }
    
}