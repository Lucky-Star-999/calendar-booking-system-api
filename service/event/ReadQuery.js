// Get all eventid
exports.readEventid = () => {
    let query = 
        `SELECT eventid FROM event;`;
    return query;
}
