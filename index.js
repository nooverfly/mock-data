const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const deviceRouter = require('./routers/device')
const houseRouter = require('./routers/house')
const populationRouter = require('./routers/population')
const tempRouter = require('./routers/temp')

app.use(cors())

app.use('/device', deviceRouter)
app.use("/house", houseRouter)
app.use("/population", populationRouter)
app.use("/temp", tempRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})