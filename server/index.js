const express = require('express');
const path = require('path');

// const controller = require('./controller/index.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',express.static(path.join(__dirname,'../client/dist')));

// app.get('/api/blogs', controller.get);

// app.patch('/api/blogs/:blogId', controller.patch);

// app.post('/api/blogs', controller.post);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
