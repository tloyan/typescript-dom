//DO NOT EDIT THIS FILE !!!!!

const EXO = 'exo'

export const init = (label = 'Exercice') => {
  const el = document.getElementById(EXO)
  if (el) {
    document.getElementById(EXO).parentNode.removeChild(el)
  }

  const exoDiv = document.createElement('div')
  const h2 = document.createElement('h2')
  h2.innerText = label
  exoDiv.setAttribute('id', EXO)
  exoDiv.appendChild(h2)
  document.getElementById('root').appendChild(exoDiv)
}

const displayText = label => {
  const exoDiv = document.getElementById(EXO)
  const p = document.createElement('p')
  p.innerText = label
  exoDiv.appendChild(p)
}

export const initExo1 = (label = 'formExo') => {
  init()
  const exoDiv = document.getElementById(EXO)
  const form = document.createElement('form')
  form.setAttribute('id', label)
  const input = document.createElement('input')
  input.setAttribute('type', 'text')
  // const button = document.createElement('input')
  // button.setAttribute('type', 'submit')
  // button.value = 'envoyer'
  form.appendChild(input)
  // form.appendChild(button)
  exoDiv.appendChild(form)
}
export default displayText
