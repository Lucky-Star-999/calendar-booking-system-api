
// Check if the eventid exists
exports.isEventIdExists = (eventid) => {
    let query = 
        `SELECT eventid FROM event WHERE eventid = '${eventid}';`;
    return query;
}

// Create an event (not consider invitation yet)
exports.createEvent = (eventid, hostemail, title, starttime, endtime, description, target) => {
    let query = 
        `INSERT INTO event
            (eventid, hostemail, title, starttime, endtime, description, target)
        VALUES
            ('${eventid}', '${hostemail}', '${title}', '${starttime}', '${endtime}', '${description}', '${target}');`;
    return query;
}
