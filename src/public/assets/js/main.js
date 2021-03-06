const loginForm = document.querySelector('#loginForm')

// CONVERTE TODOS OS VALORES DOS INPUTS DE UM FORM RETORNANDO UM OBJETO JSON
function handleSubmitForm(e) {
  const data = new FormData(e.target)
  const formValues = Object.fromEntries(data.entries())
  return formValues
}

loginForm.addEventListener('submit', e => {
  e.preventDefault()
  const formValues = handleSubmitForm(e)

  // POST PARA O BFF NA ROTA DE AUTENTICAÇÃO
  axios.post('/login', {
    username: formValues.username,
    password: formValues.password
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })
})
