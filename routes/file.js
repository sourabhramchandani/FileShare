
const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const File = require('../model/file');
const { v4: uuid4 } = require('uuid');

let storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        let uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)} ${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    }

});
let upload = multer({
    storage,
    limit: { fileSize: 1000 * 100 },
}).single('myfile');

router.post('/', (req, res) => {
    //file and user validation
    console.log("hi-----------------------------------------------");
    console.log(req.user);
    upload(req, res, async (err) => {

        if (!req.file) {
            console.log(req.body.user);
            return res.json({ error: req.body.user });
        }
        if (!(req.body.user)) {
            return res.json({ error: 'user not found ' });
        }
        if (err) {
            return res.status(500).send({ error: err.message });
        }
        let user = JSON.parse(req.body.user);
        //upload
        let file = new File({
            filename: req.file.filename,
            uuid: uuid4(),
            path: req.file.path,
            size: req.file.size,
            ownername: user.username,
            ownerid: user.userid,


        });
        const response = await file.save();
        return res.json({ file: `${process.env.APP_BASE_URL}/files/${response.uuid}` });

    });
});

module.exports = router;