const express = require('express');

const app = express();

app.use('/', (req, resp) => {
    resp.send('Hello World');
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});
