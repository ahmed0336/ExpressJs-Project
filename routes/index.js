// const router =require('express').Router();
// or
const express = require('express');
const router = express.Router();

const apikeymiddleware = require('../middlewares/apiKey');



router.get('/', (req, res) => {
    //      res.send('<h1>hello baloch</h1>');
    //  for all path we import path module
    // res.sendFile(path.resolve(__dirname) + '/index.html');
    res.render('index', {
        tittle: "my title page"
    });

})

router.get('/about', (req, res) => {
    //      res.send('<h1>hello baloch</h1>');
    //  for all path we import path module  
    // res.sendFile(path.resolve(__dirname) + '/about.html');
    res.render('about', {
        tittle: "my about page"
    });

})

router.get('/download', (req, res) => {
    //      res.send('<h1>hello baloch</h1>');
    //  for all path we import path module  
    res.download(path.resolve(__dirname) + '/about.html');

})

router.get('/api/products', apikeymiddleware,  (req, res) => {
    //apis ke lye hum send nai balke json (array of object) data send krte hai
    //   
    res.json(
        [
            {
                id: '11',
                name: 'ahmed'

            },
            {
                id:'22',
                name:'safdar'
                     
            }
        ]
    )


})






// export router
module.exports = router;