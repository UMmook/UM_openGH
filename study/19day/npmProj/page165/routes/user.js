const express = require('express');
const router = express.Router();

// 127.0.0.1:3000/
router.get('/', (req, res) => {
    // res.send("<p>user page</p>");
    res.render('user', {});
});

module.exports = router;