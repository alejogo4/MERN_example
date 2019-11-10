const {Router} = require('express');
const router = Router();
const {createUser,deleteUser,editUser,getUser,getUsers} = require("./../Controllers/users.controller");
router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
   // .get(getUser)
    //.put(editUser)
    .delete(deleteUser);    


module.exports = router;