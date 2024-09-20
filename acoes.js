const ativarjogos = () => {
    const oi = document.querySelector(".jogosmenuoculto")
    if (oi.style.display == "none" || oi.style.display == "") {
        oi.style.display = "block"
    }
    else{
        oi.style.display = "none"
    }
}

const ativarsobre = () => {
    const oi = document.querySelector(".sobregeiko")
    if (oi.style.display == "none" || oi.style.display == "") {
        oi.style.display = "block"
    }
    else{
        oi.style.display = "none"
    }
}

const ativarmenuoculto = () => {
    const oi = document.querySelector(".menuocultor")
    if (oi.style.display == "none" || oi.style.display == "") {
        oi.style.display = "block"
    }
    else{
        oi.style.display = "none"
    }
}

const fecharmenumobile = () =>{
    const oi = document.querySelector(".menuocultor")
    if (oi.style.display == "block") {
        oi.style.display = "none"
    }
    else{
        oi.style.display = "none"
    }
}