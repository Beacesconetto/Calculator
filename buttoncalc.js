const calculator = {
    handleOperations: function() {
        const display = document.getElementById('displayinfo');
        
        let value = ''
        for (let i = 0; i < display.innerText.length; i++) {
            if (!isNaN(display.innerText[i]) && display.innerText[i+1] === '(') {
                value += display.innerText[i] + '*';
            } else {
                value += display.innerText[i];
            }
        }

           
        let expression = value;
         if (expression !== "") {
            const result = eval(expression);
            display.innerText = result;
        } 
    }

   }
   function digitNumber(value) {
    let display = document.getElementById("displayinfo");
    display.textContent += value 
   }
   function clearLast() {
    let display = document.getElementById("displayinfo");
    let delet = display.textContent
    display.textContent = delet.slice(0,-1)
   }
   function clearAll() {
    let display = document.getElementById("displayinfo");
    display.textContent = ""
   }

   document.addEventListener("keydown",(event)=>{
    if (event.key === "Delete") {
        clearAll() 
    }else if (event.key === "=" || event.key === "Enter") {
        calculator.handleOperations()
    } else {
        digitNumber(event.key)
    } 
   })