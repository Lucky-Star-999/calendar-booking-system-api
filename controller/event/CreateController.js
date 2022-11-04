const eventCreateModel = require('./../../model/event/CreateModel.js');

const eventIdGenerator = require('./../../service/event/EventIdGenerator.js');

// Create an event (including invitation) - Not completed ...
exports.createEvent = async (req, res) => {
    if (req.query.hostemail == '' || req.query.title == '' || 
        req.query.starttime == '' || req.query.endtime == '' || req.query.target == '') {
        res.send('Please fill in all field');
    } else {
        let eventid = await eventIdGenerator.getEventid();
        await eventCreateModel.createEvent(eventid, req.query.hostemail, req.query.title,
                req.query.starttime, req.query.endtime, req.query.description, req.query.target);
        // req.query.guestemails: 'admin2@gmail.com admin3@gmail.com admin9@gmail.com'
        await eventCreateModel.createInvitation(eventid, req.query.guestemails);

        res.send('Add event successfully');
    }
}


