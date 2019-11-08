const {Router} = require('express');
const router = Router();
const { createNote, deleteNote,editNote,getNote, getNotes} = require("./../Controllers/notes.controller");

router.route('/')
    .get(getNotes)
    .post(createNote);

router.route('/:id')
    .get(getNote)
    .put(editNote)
    .delete(deleteNote);    


module.exports = router;