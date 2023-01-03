// import  express kren yeh ek function return krege wo express ke object ko call krega object ke andr sari objects usko hum use kreg
// require node ka function hai jis se hum express ko use kr skhte hai

const express = require('express'); 

// yeh node me hota path module 
const  path = require('path');
const ErrorHandle = require('./erros/ErrorHandle');

const app =express();
// import kro kisi b router ko
const mainRouter =require('./routes/index');

const productRouter =require('./routes/products');

app.use(express.static('public')) 
app.use(express.json()) 
// is ke kre se ab hum post api me json data get kr skhte with help of json middleware

// agar koi prefix rakha hai tou hum use kr skhte hai means mainrouter ko second rkhna
// app.use('/api',mainRouter)
app.use(mainRouter)

// phir usko express me register kro router ko
app.use(productRouter)


 
// yeh ek template engine hai  set and get krte hai

app.set('view engine', 'ejs');

// server se template enginer se browser using render()
// template enginer se hum repeat chizo ko khtm kr skhte hai
// app.set(path.resolve(__dirname) +    'ejs') 

// app.set('views', path.resolve(__dirname) + '/templates');
console.log(app.get('views'))

// create server in experss like port:3000
// app.listen(3000 ,()=>console.log("hello baloch"))
// environment varaible ke help se hum availble port ko access krge agr nai tou 3000 kri
// listen me hum port provide krte hai
const PORT = process.env.PORT  || 3000;

// create route from browser ,jo callback function leyta hai

// bar bar serve restart se bachney ke lye hum ek package use krte wo hai nodemon

// error handling ==>gobal middleware

app.use((req ,res ,next) =>{

    return res.json({ message: 'Page Not Found!' });
 
});

// error ko throw to hum yahan catch krege
// express error handling error middleware

app.use((err,req ,res,next)=>{
    if(err instanceof ErrorHandle ){
        res.status(err.status).json({
            error: {
                message:err.message,
                status:err.status
            }
        
        })

    }
    else{
       res.staus(500).json({
        error: {
            message:err.message,
            status:err.status
        }
    
       })
    }
    // console.log("Error",err.message)
   
    // next()

})


app.listen(PORT ,()=>console.log(`listen hello baloch from ${PORT}`))

