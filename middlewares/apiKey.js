
function apiKey(req, res, next) {

    // const api_Key = '111';

    const abc = '123';
    // req.body humein post req me milta hai 
    // console.log("api_Key",req.body);
   
    // for query we use req.query
    console.log(req.query.abc);
    // const user = req.query.api_key
     
    // this const creating issue
    // const user_Api_key = req.query.api_Key

    if(req.query.abc && (req.query.abc === abc )){
          
        next();

    } else{
        res.json({ message: 'not allowed'});
    }

    // if (userkey && (userkey === api_Key)) {

    //    next();
    //    console.log("next wala")

    // } 
    // else {

    //     res.json({ message:'Not Found'});

    // }
    


}


module.exports = apiKey;

// global api key ==>
// jo b user humein api key send krega usko hum is se check krge agr mila tou age send krega wrna not allow