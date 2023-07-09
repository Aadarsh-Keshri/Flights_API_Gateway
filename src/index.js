const rateLimit=require('express-rate-limit')
const express=require('express');
const {createProxyMiddleware}=require('http-proxy-middleware');

const {ServerConfig}=require('./config');   //we don't need to specify whole path in index.js file
const apiRoutes = require('./routes');

const app = express();

const limiter = rateLimit({
	windowMs: 2 * 60 * 1000, // 2 minutes
	max: 4, // Limit each IP to 4 requests per `window` (here, per 2 minutes)
})

app.use(express.json());//express bhaiya please read request in json
app.use(express.urlencoded({extended:true}));

app.use(limiter);

app.use('/flightsService',createProxyMiddleware({
	target: ServerConfig.FLIGHT_SERVICE,
	changeOrigin: true,
	pathRewrite: {'^/flightsService':'/'}
}))
app.use('/bookingService',createProxyMiddleware({
	target: ServerConfig.BOOKING_SERVICE,
	changeOrigin: true
}))

app.use('/api',apiRoutes);//any url starting with /api will be redirected to routes folder

app.listen(ServerConfig.PORT,()=>{
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});