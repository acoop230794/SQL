const routes = require('express').Router();
const routeController = require('../controllers/connnectionController');

routes.get('/', routeController.getIndex);
routes.get('/StaffMember', routeController.getStaffMember);
routes.post('/CreateStaffMember', routeController.postStaff);
routes.delete('/DeleteStaffMember', routeController.deleteStaff);

module.exports = routes;
