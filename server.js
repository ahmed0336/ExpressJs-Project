// import  express kren yeh ek function return krege wo express ke object ko call krega object ke andr sari objects usko hum use kreg
// require node ka function hai jis se hum express ko use kr skhte hai

const express = require('express'); 

// yeh node me hota path module 
const  path = require('path');

const app =express();

const mainRouter =require('./routes/index');

app.use(express.static('public')) 
// agar koi prefix rakha hai tou hum use kr skhte hai means mainrouter ko second rkhna
// app.use('/api',mainRouter)
app.use(mainRouter)
 
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



app.listen(PORT ,()=>console.log(`listen hello baloch from ${PORT}`))

