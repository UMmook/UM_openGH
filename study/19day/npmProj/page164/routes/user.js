const express = require('express');
const router = express.Router();

// app.get(); 비교
// 127.0.0.1:3000/user
router.get('/', (req, res) => {
    res.send("<p>user page</p>");
});

router.get('/user/:id', (req, res) => {
    res.send(`<p>user ${req.params.id} page</p>`);
}); // 127.0.0.1:3000/user/:id (x), 127.0.0.1:3000/user/user/123

module.exports = router;