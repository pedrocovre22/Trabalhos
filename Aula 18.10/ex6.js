let num1 = Number(prompt("Insira um número: "))
      let num2 = Number(prompt("Insira outro número: "))   
      
      if (num1 > num2){
        if (num1 % num2 == 0) {
          console.log("Sao multiplos!")
        } else {
          console.log("Nao sao multiplos!")
        }
      } else {
        if (num2 % num1 == 0){
          console.log("Sao multiplos!")
        } else {
          console.log("Nao sao multiplos!")
        }
      }
