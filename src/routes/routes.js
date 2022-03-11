module.exports = function (router) {
  // MÓDULOS
  const bodyParser = require('body-parser') // CONVERTE O BODY DA REQUISIÇÃO PARA JSON
  router.use(bodyParser.json({ extended: true }))

  // CONTROLLERS
  const authController = require('../public/assets/js/controller/authController')

  // ROTA PADRÃO
  router.get('/', (req, res) => {
    res.render('pages/index')
  })

  // ROTA DE LOGIN
  router.post('/login', async (req, res) => {
    const credentials = req.body
    const response = await authController.login(credentials)
  })
}
