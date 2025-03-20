const Form = document.querySelector(".formulario") 
const Mascara = document.querySelector(".mascara-form")

function cliqueiNoBotao(){
   Form.style.left = "50%"
    Form.style.transform = "translateX(-50%)"
    Mascara.style.visibility = "visible"
}

function hide(){
    Form.style.left = "-235px"
Form.style.transform = "translateX(0)"
Mascara.style.visibility = "hidden"
}