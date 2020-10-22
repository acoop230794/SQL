const functions = require('../lib/connection');

exports.getIndex =  async (req, res) =>{
    let values = await functions.SelectAllStaff();
    let display = values.recordset;
    res.send(display);
}

exports.getStaffMember =  async (req, res) =>{
    let {ID} = req.query;
    let values = await functions.SelectStaffMember(ID);
    let display = values.recordset;
    res.send(display);
}

exports.postStaff = async (req, res) => {
    // let { all of the values} = req.query
    functions.CreateStaffMember();
    res.send('created')
}

exports.deleteStaff = async (req, res) => {
    // let { all of the values} = req.query
    functions.DeleteStaffMember();
    res.send('Deleted')
}