'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const FilteringRule = require('./filtering-rule');

const filteringRules = [
    new FilteringRule({src: '192.168.0.0', dst: '10.0.0.0', port: 25}),
    new FilteringRule({src: '192.168.1.0', dst: '10.0.1.0', port: 22}),
];

const app = express();

app.use(bodyParser.json());
app.use(express.static('frontApp'));

app.get('/filtering-rules/', (req, res) => {
    res.send(filteringRules);
});

app.post('/filtering-rules/', (req, res) => {
    filteringRules.push(new FilteringRule(req.body));
    res.send(filteringRules);
});

module.exports = app;

app.listen(8080);