const textarea = document.querySelector(".inputText");
textarea.addEventListener("input", evento => 
{
    textarea.style.height = "auto";
    textarea.style.height = `${evento.target.scrollHeight}px`;
})