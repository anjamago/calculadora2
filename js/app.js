var operators= ['+','-','/','x','%','=','.','c'];
var element;
var input;
var controlpad;
var result;
var calculator ={
  input1:null,
  input2:null,
  operator:null,
  check_input :function(){
    input= document.getElementById('input');
    var errors = document.querySelector('#result');
    var numero =  Number(input.value);

    if(numero !== NaN){
      if(this.operator !== -1){
        this.input1 = numero;
      }else{

      }
    }

  }
};

document.addEventListener('DOMContentLoaded',function(event){
   controlpad = document.getElementById('controlpad');
   result = document.getElementById('result');

  init();
  var button_operator = document.querySelectorAll('#operators button');
  var button =0;
  for(button; button < button_operator.length; button ++){
    button_operator[button].addEventListener("click",calculator.check_input);
    calculator.operator = button_operator.textContent;
  }

});
/*
window.onload=function(){
  input = document.getElementById('input');
  init();
};
*/

var init = function(){
  html ='';
  element = document.getElementById('operators');
  for(var keys in operators){
      html += '<li><button>'+operators[keys]+'</button></li>';
  }
  element.innerHTML = html;

};
