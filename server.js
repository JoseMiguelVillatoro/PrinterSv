const express = require('express')
const app = express()
const PORT = 3000

// 👇 ESTE ES EL PASO CLAVE
app.use(express.urlencoded({ extended: true }))

// Archivos estáticos
app.use(express.static('public'))

// Página principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

// 👉 FORMULARIO
app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body

  console.log('Nuevo mensaje:')
  console.log(name, email, subject, message)

  res.redirect('/contact.html')
})

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
