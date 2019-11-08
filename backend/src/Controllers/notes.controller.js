let notesCtrl = {};

notesCtrl.getNotes = (req,res)=>res.send("Notas Obtenidas");
notesCtrl.createNote = (req,res)=>res.send("Nota Insertada");
notesCtrl.getNote = (req,res)=>res.send("Nota Obtenidas");
notesCtrl.deleteNote = (req,res)=>res.send("Nota Eliminada");
notesCtrl.editNote =  (req,res)=>res.send("Nota Editada");


module.exports = notesCtrl;