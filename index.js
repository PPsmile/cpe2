const express = require('express')
const app = express()
const port = 10527

app.get('/', (req, res) =>
  res.send('Greetings from PPsmile...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
