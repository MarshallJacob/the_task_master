const router = require('express').Router();
const userRoutes = require('./user-routes');
const teamRoutes = require('./team-routes');
const taskRoutes = require('./task-routes');


router.use('/users', userRoutes);
router.use('/teams', teamRoutes);
router.use('/tasks', taskRoutes);


module.exports = router;
