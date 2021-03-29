const router = require('express').Router();
const { v4: uuid4 } = require('uuid');
const User = require('../model/user');





router.post('/', async (req, res) => {
    console.log(req.body);
    let user = (req.body.user);
    if(!user.username && !(user.username.trim().length>0)){
        return res.status(500).send({ error: "username length should be greater then zero" });
        }
        if(!user.password && !(user.password.trim().length>0)){
            return res.status(500).send({ error: "password length should be greater then zero" });
            }
            let dbuser = new User({
                username: user.username,
                password: user.password,
                uuid: uuid4()
            });
            const response = await dbuser.save();
            return res.json({ user: `${response.uuid}` });

    
    
            //user validation
    

    return res.json({ file: `${process.env.APP_BASE_URL}` });

});

router.get('/', async (req, res) => {
    console.log(req.body);
    let user = (req.body.user);
    if(!user.username && !(user.username.trim().length>0)){
        return res.status(500).send({ error: "username length should be greater then zero" });
        }
        if(!user.password && !(user.password.trim().length>0)){
            return res.status(500).send({ error: "password length should be greater then zero" });
            }
            let dbuser = new User({
                username: user.username,
                password: user.password,
                uuid: uuid4()
            });
            const response = await dbuser.save();
            return res.json({ user: `${response.uuid}` });

            //user validation

    return res.json({ file: `${process.env.APP_BASE_URL}` });

});

module.exports = router;