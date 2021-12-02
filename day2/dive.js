const fs = require('fs')

const values = fs.readFileSync('day2/diveInput.csv')
.toString()
.split('\n')
.map( x => x.split(' '))

const orders = {
    forward: 0,
    down: 0,
    up: 0
};

values.forEach( order => {
    orders[order[0]] += parseInt(order[1], 10)
})

console.log(orders)

const aimOrders = {
    horPos: 0,
    depth: 0,
    aim: 0
};

values.forEach( order => {
    const dir = order[0];
    const X = parseInt(order[1], 10)
    if (dir === 'forward')
    {
        aimOrders['horPos'] += X
        aimOrders['depth'] += aimOrders['aim'] * X
    }
    else if (dir == 'up')
    {
        aimOrders['aim'] -= X
    }
    else if (dir == 'down')
    {
        aimOrders['aim'] += X
    }
})

console.log(aimOrders)