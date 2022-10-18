et num = parseFloat(prompt("Digite um numero"))          
          if (num >= 0 && num < 100){
            if (num <= 25) {
              console.log("Intervalo [0,25]");
            } else if (num <= 50){
              console.log("Intervalo (25, 50]");
            } else if (num <= 75){
              console.log("Intervalo (50, 75]");
            } else { 
              console.log("Intervalo (75, 100]");
            }
          } else {
            console.log("Fora do intervalo");
