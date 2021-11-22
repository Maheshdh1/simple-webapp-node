const express = require('express')
const app = express()

app.listen(3002,() => console.log('Running ..'));
app.use(express.static("public"));
app.use(express.json({limit: '1kb'}));
app.post('/api',(request,response) => {
    console.log(request.body);
})