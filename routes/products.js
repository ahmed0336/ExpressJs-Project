const router =require('express').Router();


router.get('/products', (req, res) => {
    //      res.send('<h1>hello baloch</h1>');
    //  for all path we import path module  
    // res.sendFile(path.resolve(__dirname) + '/about.html');
    res.render('products', {
        tittle: "my Products page"
    });

})


module.exports=router


// routers ko register krna zarori hai