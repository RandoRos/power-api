const express = require('express');
const cors = require('cors');

const app = express();
const memoryDB = {
    datapoints: [],
};

app.use(cors());

app.get('/api/datapoints/all', (req, res) => {
    res.send(memoryDB.datapoints);
})

app.listen(3000, () => {
    console.log('APP Started at port 3000');
    generateDatapoints();
});

const generateDatapoints = () => {
    let id = 1;
    setInterval(() => {
        memoryDB.datapoints.push(
            {
                id,
                date: new Date(),
                power: Math.random() * (1000 - 50) + 1,
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
