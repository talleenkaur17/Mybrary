if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express=require('express')
const app=express()
const expresslayouts=require('express-ejs-layouts')
const indexRouter=require("./routes/index")
app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.set('layout','layouts/layout')
app.use(expresslayouts)
app.use(express.static('public'))
const mongoose=require('mongoose')
mongoose.connect('mongodb://0.0.0.0/todo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));


app.use('/',indexRouter)


app.listen(process.env.PORT || 3000)