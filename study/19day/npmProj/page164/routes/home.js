const express = require('express');
const router = express.Router();

// app.get(); 비교
router.get('/', (req, res) => {
    res.send("<p>home page</p>");
});

module.exports = router;