const fs = require('fs')

const values = fs.readFileSync('day1/sonarSweepInput.csv')
.toString()
.split('\n')
.map( x => parseInt(x, 10))

let increaseCount = 0
for (i = 1; i < values.length; i++)
{
    if (values[i] > values[i - 1])
    {
        increaseCount++
    }
}

console.log(increaseCount)

let slidingIncreaseCount = 0
for (i = 3; i < values.length; i++)
{
    if ((values[i] + values[i - 1] + values[i - 2])
     > (values[i - 1] + values[i - 2] + values[i - 3]))
    {
        slidingIncreaseCount++
    }
}

console.log(slidingIncreaseCount)