const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const compression = require('compression');
const config = require ('./config');
const userRoutes = require('./routes/v1/api.js');
const app = express();


app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(config.api.version, userRoutes);

app.listen(config.server.port, err => {
    if (err) {
        console.log(err );
        process.exit(1);
    }

    console.log(
        `API is now running on port ${config.server.port} in ${config.env} mode`
    );
});

