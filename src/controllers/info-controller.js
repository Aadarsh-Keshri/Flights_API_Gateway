const {StatusCodes}=require('http-status-codes');

// const info=(req,res)=>{
//     return res.json({
//         success : true,
//         message : "API is live",
//         error : {},
//         data : {}
//     });
// }

const info=(req,res)=>{  //res.status(500)-->res.json({})-->res
    return res.status(StatusCodes.OK).json({
        success : true,
        message : "API is live",
        error : {},
        data : {}
    });
}//sets the status code and returns the same response object


module.exports={
    info
}