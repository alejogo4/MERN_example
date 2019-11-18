import React, { Component } from 'react'
import axios from 'axios';
const usersURL = "http://localhost:4000/api/users/";

export default class CreateUser extends Component {
    
    state = {
        users:[],
        user:""
    }

    async componentDidMount(){
        this.obtenerUsers();
    }

    obtenerUsers = async()=>{
        let usersList = await axios.get(usersURL);
        this.setState({users:usersList.data});
    }

    listarUsers = ()=>{
        if(this.state.users){
            return this.state.users.map(user=>
                <li 
                className="list-group-item list-group-item-action"
                onDoubleClick={()=>this.eliminarUser(user._id)} 
                key={user._id}>
                    {user.username}
                </li>
                )
        }else{
            return "Cargando..."
        }

        //Se puede asi tambien colocandolo en las llaves
        /* (this.state.users)
                            ?this.state.users.map(user=>
                                <li className="list-group-item list-group-item-action" key={user._id}>{user.username}</li>
                                )
                            :"Cargando..."*/
    }

    onChangeUser = (e)=>{
        this.setState({user:e.target.value})
    }

    onSubmitUser = async(e)=>{
        e.preventDefault();
        await axios.post(usersURL,{
            username:this.state.user
        });
        this.obtenerUsers();
        this.setState({user:''});
    }

    eliminarUser = async(id)=>{

        await axios.delete(usersURL+id);
        this.obtenerUsers();
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card card-body">
                        <h3>Crear Usuario</h3>
                        <form onSubmit={this.onSubmitUser}>
                            <div className="form-group">
                                <input type="text" className="form-control" value={this.state.user}  onChange={this.onChangeUser}/>
                            </div>
                            <input type="submit" className="btn btn-primary" value="Crear"/>
                        </form>
                    </div>
                </div>
                <div className="col-md-5">
                    <ul className="list-group">
                        {
                            this.listarUsers()
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
