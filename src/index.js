const rateLimit=require('express-rate-limit')
const express=require('express');
const {createProxyMiddleware}=require('http-proxy-middleware');

const {ServerConfig}=require('./config'); 
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
	target: ServerConfig.FLIGHT_SERVICE, //http://localhost:[PORT]/ ; for docker:  http://flights_service:[PORT]/
	changeOrigin: true,
	pathRewrite: {'^/flightsService':'/'}
}))

app.use('/bookingService',/*[f1,f2],*/createProxyMiddleware({
	target: ServerConfig.BOOKING_SERVICE,
	changeOrigin: true
}))


// function f1(req,res,next){
// 	console.log("f1");
// 	next();
// }

// function f2(req,res,next){
// 	console.log("f2");
// 	next();
// }

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT,()=>{
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});