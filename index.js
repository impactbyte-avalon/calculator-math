
var nilai1,
  nilai2,
  nilai3 = 0;

const hitung = function()
{
  var oper = "" ;

  nilai1 = document.getElementById("firstNumber").value;
  nilai2 = document.getElementById("secondNumber").value;
  oper=document.getElementById("operator").value;
  console.log(oper);
  switch (oper) {
    case "*":
      multiply();
      break;
    case "+":
      add();
      break;
    case "/":
      divide();
      break;
    case "-":
      substract()
      break;
    default:
      break;
  }
  display();
};

const display = function()
{
  document.getElementById("result").value=nilai3;
}

const add = function()
{
  nilai1 = document.getElementById("firstNumber").value;
  nilai2 = document.getElementById("secondNumber").value;
  nilai3 = parseInt(nilai1) + parseInt(nilai2);
};

const multiply = function()
{
  nilai1 = document.getElementById("firstNumber").value;
  nilai2 = document.getElementById("secondNumber").value;
  nilai3 = parseInt(nilai1) * parseInt(nilai2);
};


const divide = function()
{
  nilai1 = document.getElementById("firstNumber").value;
  nilai2 = document.getElementById("secondNumber").value;
  nilai3 = parseInt(nilai1) / parseInt(nilai2);
};

const substract = function()
{
  nilai1 = document.getElementById("firstNumber").value;
  nilai2 = document.getElementById("secondNumber").value;
  nilai3 = parseInt(nilai1) - parseInt(nilai2);
};
