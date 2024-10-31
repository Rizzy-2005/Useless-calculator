const display = document.getElementById("Input-box");
  function appendtodisplay(input)
  {
      display.value += input;
  }
  function clearinput()
  {
      display.value = " ";
  } 
  function calculate()
  {
      display.value = eval(display.value);
      if(display.value == Infinity)
      {
          display.value = "Nah uh";
      }
  }