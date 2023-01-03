const res = require('express/lib/response');

const router =require('express').Router();

const products =require('../productsData')


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

})


module.exports= router;


// routers ko register krna zarori hai