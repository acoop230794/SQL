// inside of the lib folder
const sql = require('mssql'); // npm i mssql

/**
 * connections: 
 * * Select all from the CodeNation database:
 * * Staff table: receiving the details
 * 
 * TODO: Export our functions
 */

const connection = async () => {
    await sql.connect('mssql://sa:<SetYourPasswordHere>@localhost,1433/CodeNation')
}

const SelectAllStaff = async () => {
    await connection();
    let result;
    try {
        result = await sql.query `SELECT * FROM employee`
    } catch (err) {
        console.log('error');
    }
    return result;
}

const SelectStaffMember = async (ID) => {
    await connection();
    let result;
    try {
        result = await sql.query `SELECT * FROM employee WHERE ID = ${ID}`
    } catch (err) {
        console.log('error');
    }
    return result;
}

const CreateStaffMember = async (ID) => {
    await connection();
    let result;
    try {
        result = await sql.query `INSERT INTO employee VALUES (4, "Dean", 30000, "Boss", 250)`
    } catch (err) {
        console.log('error');
    }
    return result;
}

const DeleteStaffMember = async (ID) => {
    await connection();
    try {
        const result = await sql.query `DELETE FROM employee WHERE id = 4`
    } catch (err) {
        console.log('error');
    }
    return result;
}


module.exports = {
    SelectAllStaff,
    SelectStaffMember,
    CreateStaffMember,
    DeleteStaffMember
}