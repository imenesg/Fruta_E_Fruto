var botao = document.querySelectorAll(".alerta")


for (let index = 0; index < botao.length; index++) {
    botao[index].addEventListener("click",()=>{
    console.log("foi");
        alert(" 🍅Obrigado por visitar o projeto :)🥑")
    });
    
}