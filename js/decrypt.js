const decryptButton = document.querySelector(".decrypt");

decryptButton.addEventListener("click", () => {
    let inputText = textarea.value;
    const keys = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

    let validartexto = /[^a-zñ\s]/g;
    
    if (inputText.length > 0)
    {
        if (validartexto.test(inputText))
        {
            alert("Por favor, ingrese solo letras minusculas y sin acentos");
        }
        else
        {
            for (let i = 0; i < keys.length; i++)
            {
                if (inputText.includes(keys[i][1]))
                {
                    inputText = inputText.replaceAll(keys[i][1], keys[i][0]);
                }
            }

            let resultText = document.querySelector(".resultText");
            resultText.textContent = inputText;
        
            const showResult = document.querySelector("#resultContent");
            const munieco = document.querySelector("#munieco");
            const mensajes = document.querySelector("#hideMesagges");

            showResult.classList.remove("hideContent");
            munieco.classList.add("hideContent");
            mensajes.classList.add("hideContent");
            showResult.classList.add("showResult");
        }
    }
    else
    {
        alert("Por favor, ingrese el texto");
    }
})