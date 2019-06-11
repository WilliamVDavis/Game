const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3500 

app.use('/', express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'static/BoomerangGame.html'));
});


app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 