const ativardownload = () => {
    const oi = document.querySelector(".versoes")
    if (oi.style.display == "none" || oi.style.display == "") {
        oi.style.display = "block"
    }
    else{
        oi.style.display = "none"
    }
}