const car_router = require('./car.route')

module.exports =((app) =>{
    app.use("/cb/car",car_router)
})