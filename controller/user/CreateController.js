const userCreateModel = require('./../../model/user/CreateModel.js');

// Create an user
exports.createUser = async (req, res) => {

    if (req.body.email == '' || req.body.password == '' || req.body.fullname == '') {
        res.send('Please fill in all field');
    } else {
        let isEmailExists = await userCreateModel.isEmailExists(req.body.email);

        if (isEmailExists.length == 0) {
            let result = await userCreateModel.createUser(req.body.email, req.body.password, req.body.fullname);
            res.send('1');
        } else {
            res.send('The email is existed');
        }
    }
}