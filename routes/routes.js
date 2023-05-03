const express = require('express');
const router = express.Router();

const dashboardRoutes = require('./dashboardRoutes');
const indexRoutes = require('./indexRoutes');
const loginRoutes = require('./loginRoutes');
const logoutRoutes = require('./logoutRoutes');
const registerRoutes = require('./registerRoutes');

router.use('/', indexRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);
router.use('/register', registerRoutes);

module.exports = router;