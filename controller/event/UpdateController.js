const eventUpdateModel = require('./../../model/event/UpdateModel.js');

// Accept an invitation
exports.acceptInvitation = async (req, res) => {
    await eventUpdateModel.acceptInvitation(req.query.eventid, req.query.email);

    res.send('Accept event successfully');
}

// Decline an invitation
exports.declineInvitation = async (req, res) => {
    await eventUpdateModel.declineInvitation(req.query.eventid, req.query.email);

    res.send('Decline event successfully');
}