const eventDeleteModel = require('./../../model/event/DeleteModel.js');

// Delete an event
exports.deleteEvent = async (req, res) => {
    await eventDeleteModel.deleteEvent(req.query.eventid);
    await eventDeleteModel.deleteInvitation(req.query.eventid);

    res.send('Delete event successfully');

}