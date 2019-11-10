const NoteModel = require("./../Models/Note");

let notesCtrl = {};

notesCtrl.getNotes = async (req,res)=>{
    const notes = await NoteModel.find();
    res.json(notes);
};
notesCtrl.createNote = async (req,res)=>{
    const {tittle,description,author} = req.body;
    
    const NewNote = new NoteModel({
        tittle:tittle,
        description:description,
        author:author,
    });

    NewNote.save();
    res.send("Nota Insertada");
};

notesCtrl.getNote = async (req,res)=>{
    const note = await NoteModel.findById(req.params.id)
    res.json(note);
};

notesCtrl.deleteNote = async (req,res)=>{
    await NoteModel.deleteOne({"_id":req.params.id});
    res.json({
        message : "Nota eliminada"
    });
};
notesCtrl.editNote =  async (req,res)=>{
    const note = await NoteModel.updateOne({"_id":req.params.id},req.body);

    console.log(note);
    res.json({
        message : "Nota "+ note.tittle+" Actualizada"
    });
};


module.exports = notesCtrl;