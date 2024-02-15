const nombre = document.get.getElementById("name")
constemail = document.get.getElementById("email")
const pass = document.get.getElementById("password")
const form = document.get.getElementById("form")
const parrafo = document.get.getElementById("warnings")

form.addEvenListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.lengh >6){
        warnings += "El nombre no es valido <br>"
        entrar = true
    }
    console.log(regexEmail.test(email.value))
    if(regexEmail.test(email.value)){
        warnings += "El email no es valido <br>"
        entrar = true

    }
    if(pass.value.lengh < 8){
        warnings += "La contraseña no es valida <br>"
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"

    }
})