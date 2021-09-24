function CalculateBinary(){
    binaryCode = document.querySelector("#binaryCode").value;
    resultado = document.querySelector("#resultado");
    number = 0;
    if(binaryCode == ""){
        resultado.innerHTML = "Nenhum valor foi inserido";
        return;
    }
    for (let i = 0; i < binaryCode.length; i++) {
        if(binaryCode[i] == "1"){
            number += 2**(binaryCode.length - 1 - i);
        }else if(binaryCode[i] != "0"){
            resultado.innerHTML = "Há números diferentes de 0 e 1";
            return;
        }
    }
    resultado.innerHTML = number;
}