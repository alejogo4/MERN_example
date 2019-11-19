import React, { Component } from 'react'
import axios from 'axios'
import Calendar from 'react-calendar';
const usersURL = "http://localhost:4000/api/users/";


export default class CreateNote extends Component {

    state = {
        usuarios : [],
        user:'',
        tittle:'',
        content:'',
        date:null
    }

    async componentDidMount(){
        let resp = await axios.get(usersURL);
        this.setState({
            usuarios:resp.data.map(user=>user.username),
            user:resp.data[0].username
        })
    }

    onChangeInputs=(e)=>{
        console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmitNote = async(e)=>{
        e.preventDefault();
        const newTask = {
            tittle : this.state.tittle,
            description : this.state.content,
            author : this.state.user,
            date : this.state.date
        }
        await axios.post('http://localhost:4000/api/notes',newTask);
        window.location.href = "/";
    }

    onChangeCalendar = date=>{
        this.setState({date:date})
  
    }

    render() {
        return (
            <div className="row justify-content-center">
               <div className="col-md-6 card card-body">
                    <h4>Seleccionar el usuario</h4>
                    <select className="form-control" name="user" onChange={this.onChangeInputs}>
                        {
                            this.state.usuarios.map(user=>
                                <option key={user} value={user}>
                                    {user}
                                </option>
                            )
                            
                        }
                    </select>
                    <br/>
                    <div className="form-group">
                        <label>Titulo</label>
                        <input onChange={this.onChangeInputs} className="form-control" type="text" name="tittle"/>
                    </div>
                    <div className="form-group">
                        <label>Descripcion</label>
                        <input onChange={this.onChangeInputs} className="form-control" type="text" name="content"/>
                    </div>
                    <div className="form-group">
                        <label>Fecha</label>
                        <Calendar  onChange={this.onChangeCalendar} value={this.state.date} />
                    </div>

                    <form onSubmit={this.onSubmitNote}>
                            
                        <input type="submit" className="btn btn-primary" value="Crear"/>
                    </form>
                    
               </div>
            </div>
        )
    }
}
