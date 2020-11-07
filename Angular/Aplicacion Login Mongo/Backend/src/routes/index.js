const { Router } = require ('express');
const router = Router();

const User = require('../models/user');

router.get('/', (req, res) => { 
    res.send('Hola') 
});

router.post('/signup', (req, res) =>{
    const { email, password } = req.body;
    const newUser = new User({ email, password})
    res.send('Registrado')
});

module.exports = router;