const res = require('express/lib/response');
const { notFoundError } = require('../erros/ErrorHandle');
const ErrorHandle = require('../erros/ErrorHandle');

const router =require('express').Router();

// yeh const nai hona chahiye usko dlete ke sath change krege to error aae ga
let products =require('../productsData')


// this route for view 

router.get('/products', (req, res) => {
    //      res.send('<h1>hello baloch</h1>');
    //  for all path we import path module  
    // res.sendFile(path.resolve(__dirname) + '/about.html');
    res.render('products', {
        tittle: "my Products page"
    });

})

router.get('/api/products', (req,res)=>{

    res.json({products})

});

router.post('/api/products', (req,res,next )=>{

   const { name, price }= req.body;
   console.log("req.body==>",req.body) 

   if(!name || !price){
    // validation error ==422==>unprocessble entity
    // return  res.status(422).json({error:"All Fields are required"})

    // middleware error
    // throw new Error("All fields are required!");

    // call static method here 
    // classsname : error method
   next(ErrorHandle.validationError('Name and Price Fields are required!'));
       
     


   }

   const product = {
       id: new Date().getTime().toString(),
    name:name ,
    price:price,

   }

   products.push(product)

    res.json({products});

});

router.delete('/api/products/:productId' , (req ,resp)=>{
    products = products.filter((products) =>req.params.productId !== products.id);
    resp.json({status: 'OK'});
})


module.exports= router;


// routers ko register krna zarori hai
// express by default json data get nai krta hai aur hum yahn se usko json deyta bhej rhy hai
// jis ke lye hum ek built-in middleware use krege wo hai json ka 