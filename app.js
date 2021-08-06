const express= require('express');
const users= require('./routes/users')

const app=express();

app.use(express.static('./public'));
app.use('api/v1/users', users)
const port =3000;
app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`)

})
