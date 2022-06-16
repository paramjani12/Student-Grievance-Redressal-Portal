const express = require('express')
const app = express()
const { users } = require('./data')

app.use(express.json())
app.use(setUser)
  app.get('/frontend/src/components/StudentHome.js', (req, res) => {
    res.send('student Dashboard Page')
  })
  
  app.get('/frontend/src/components/FacultyHome.js', (req, res) => {
    res.send('Admin Page for faculty')
  })
  
  function setUser(req, res, next) {
    const userId = req.body.userId
    if (userId) {
      req.user = users.find(user => user.id === userId)
    }
    next()
  }
  
  app.listen(8081)
