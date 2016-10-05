var operators= ['+','-','/','x','%','='];
var element ;
var input;
var controlpad;
var result;
var value = null;
var calculator = {
  input1:null,
  input2:null,
  operator:null,
  check_input: function(){
    return function(){
      input= document.getElementById('input');
      var errors = document.querySelector('#result');
      var numero =  Number(input.value);
      var self = calculator;

      if(!Number.isNaN(numero)){
        if(self.input1 === null){
          self.input1 = numero;
        }else{
          self.input2= numero;
        }


      }else{
        element = querySelector('errors');
        element.innerHTML = 'Syntax Error';
        console.log('errors');
      }
console.log(self);
    };
  },//check_input
  set_number:function(button){

    return function(){
        value = button.textContent;
        input = document.querySelector('#input');

        element.value =''+input.value+value;

      };
    },
  set_operator:function(button){
      return function(){
        calculator.operator = button.textContent;
          document.querySelector('#input').value='';

      };
    },
  clear:function(){
    var self =calculator;
    self.input1 = null;
    self.input2 = null;
    self.operator = null;
    document.querySelector('#input').value='';
  },
  calcular:function(button){
    return function(){
      var self = calculator;
      console.log(button.textContent);
      if(button.textContent === '='){
        if(self.result === null)
        {
          result = ''+self.input1+' '+self.operator+' '+self.input2+' = ';
          switch (self.operator) {
            case '+':
                  result += self.input1 + self.input2;
              break;
            case '-':
                  result += self.input1 - self.input2;
              break;
            case '÷':
                  result += self.input1 % self.input2;
              break;

            case '*':
                  result += self.input1 * self.input2;
              break;
            case '/':
                  result += self.input1 / self.input2;
                break;


          }//fin del switch

        }//fin del if de result
        console.log(result);
      } // fin de el if que ejecuta la compartacion

    };
  }
};

document.addEventListener('DOMContentLoaded',function(event){
   controlpad = document.getElementById('controlpad');
   result = document.getElementById('result');


  element = document.querySelector('#input');
  var button_operator = document.querySelectorAll('#operators button');
  var button =0;
  for(button; button < button_operator.length; button ++){
    button_operator[button].addEventListener("click",calculator.check_input());
    button_operator[button].addEventListener("click",calculator.set_operator(button_operator[button]));
    button_operator[button].addEventListener('click',calculator.calcular(button_operator[button]));
  }

  button_number = document.querySelectorAll('#numbers button');
  var key =0;
  for(key=0; key < button_number.length; key++){
    button_number[key].addEventListener('click',calculator.set_number(button_number[key]));
  }
  //evento clear
  var clear = document.querySelector('#operators #clear');
  clear.addEventListener('click',calculator.clear);





});
/*
window.onload=function(){
  input = document.getElementById('input');
  init();
};
*/
