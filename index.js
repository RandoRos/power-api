const express = require('express');
const cors = require('cors');

const PORT = 8080;

const app = express();
const memoryDB = {
    datapoints: [],
};

app.use(cors());

app.get('/api/datapoints/all', (req, res) => {
    res.send(memoryDB.datapoints);
})

app.listen(PORT, () => {
    console.log(`APP Started at port ${PORT}`);
    generateDatapoints();
});

const generateDatapoints = () => {
    let id = 1;
    setInterval(() => {
        memoryDB.datapoints.push(
            {
                id,
                date: new Date(),
                power: Math.random() * (1499 - 1000) + 1000,
                device: {
                    id: 1,
                    name: 'Radiator',
                    maxPowerOutput: 1500,
                }
            }
        );
        id++;
    }, 1000);
}
