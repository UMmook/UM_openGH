const express = require('express');
const router = express.Router();

// app.get(); 비교
router.get('/', (req, res) => {
    // res.send("<p>home page</p>");
    res.render('home', {title: 'Express'});
});

module.exports = router;