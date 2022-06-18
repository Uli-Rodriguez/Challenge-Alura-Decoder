const copyButton = document.querySelector(".copyButton");

copyButton.addEventListener("click", () =>
{
    const resultText = document.querySelector(".resultText");
    navigator.clipboard.writeText(resultText.textContent);
    console.log("boton de copiar");
})