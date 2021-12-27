const express = require('express')
const cors = require('cors')
const app = express()


const Newsletter = require('./models/Newsletter')
const Schedule = require('./models/Schedule')

app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'X-PINGOTHER, Content-Type, Authorization'
  )
  app.use(cors())
  next()
})

app.get('/newsletter', async (req, res) => {
  const listNewsLetters = await Newsletter.findAll({
    attributes: ['id', 'name', 'email', 'createdAt'],
  })


  res.json(listNewsLetters)
})

// NEWSLETTER //
app.post('/add-newsletter', async (req, res) => {
  lixo = req.body.email
  const isEmail = await Newsletter.findOne({ where: { email: req.body.email } })
  if (!isEmail) {
    await Newsletter.create(req.body)
      .then((newsletter) => {
        console.log('Cadastro enviado com sucesso!')
        return res.json({
          error: false,
          mensagem: 'Cadastro enviado com Sucesso!',
        })
      })
      .catch(() => {
        console.log('Erro ao salvar Newsletter!')
        return res.json({
          error: true,
          message: 'Erro ao salvar newsletter!',
        })
      })
  } else {
    console.log('Email já cadastrado!')
    return res.json({
      error: true,
      message: 'Email já cadastrado!',
    })
  }
})

// SCHEDULE //

app.post('/add-schedule', async (req, res) => {
  await Schedule.create(req.body)
    .then((schedule) => {
      console.log('Cadastro enviado com sucesso!')
      return res.json({
        error: false,
        mensagem: 'Cadastro enviado com Sucesso!',
      })
    })
    .catch(() => {
      console.log('Erro ao salvar Schedule!')
      return res.json({
        error: true,
        message: 'Erro ao salvar Schedule!',
      })
    })
})

//PUT /schedule/:id
app.put('/add-schedule/:id', async (req, res) => {
  await Schedule.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((schedule) => {
      console.log('Cadastro atualizado com sucesso!')
      return res.json({
        error: false,
        mensagem: 'Cadastro atualizado com Sucesso!',
      })
    })
    .catch(() => {
      console.log('Erro ao atualizar Schedule!')
      return res.json({
        error: true,
        message: 'Erro ao atualizar Schedule!',
      })
    })
})


app.get('/schedule', async (req, res) => {
  const listSchedule = await Schedule.findAll({
    attributes: ['id', 'title', 'subtitle', 'timeStart', 'columnDay', 'duration', 'createdAt'],
  })
  res.json(listSchedule)
})

app.listen(8080, () => {
  console.log('Server running on port 8080')
})
