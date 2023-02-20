// const {userRouter} = require("./Routers")
const express = require("express")

// const cors = reqeuire("cors")

const app = express()
const PORT = 2302

app.use(express.json());
// app.use(cors())
app.use('/public', express.static('public'))
// app.use('/user', usersRouter);

app.listen(PORT, () => {
    console.log(`server on port ${PORT}`)
})

// sequelize synchronous
const Sequelize = require('sequelize')
// const Models = require('./models')
// Models.sequelize.sync({
//     force: false,
//     alter: true,
//     logging: console.log
// }).then(function () {
//     console.log('Database is Synchronized')
// }).catch(function (err) {
//     console.log(err, 'Something Went Wrong with Database Update!')
// });