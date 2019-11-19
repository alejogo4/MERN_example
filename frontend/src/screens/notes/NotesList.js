import React, { Component } from 'react'
import axios from 'axios'
import {format} from 'timeago.js'

export default class NotesList extends Component {

    state = {
        notes: []
    }

    async componentDidMount(){
        this.getNotes();
    }

    getNotes = async()=>{
        let resp = await axios.get("http://localhost:4000/api/notes");
        this.setState({
            notes : resp.data
        })
    }

    deleteNote = async(id)=>{
        await axios.delete(`http://localhost:4000/api/notes/${id}`);
        this.getNotes();
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note=>
                        <div className="col-md-3" key={note._id}>
                            <div className="card">
                                <div className="card-header">{note.tittle}</div>
                                <div className="card-body">
                                    {note.description}<br/><br/>
                                    By : {note.author}<br/>
                                    <button className="btn btn-danger" onClick={()=>this.deleteNote(note._id)}>Eliminar</button>
                                </div>
                                <div className="card-footer">{format(note.date)}</div>
                            </div>
                        </div>
                    )
                }
                
            </div>
        )
    }
}
