const calculator = {
    handleOperations: function() {
        const display = document.getElementById('displayinfo');
        let expression = display.innerText;


        console.log("Expressão:", expression); // Verifica se a expressão está correta

         // Verifique se a expressão não está vazia antes de avaliá-la
         if (expression !== "") {
            const result = eval(expression);

            console.log("Resultado:", result); // Verifica o resultado retornado por eval()

            display.innerText = result;
        } else {
            console.log("Expressão vazia. Nenhum cálculo a ser feito.");
        }
    }
};
