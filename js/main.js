const display = document.getElementById('display');
const botones = document.querySelectorAll('button');

let operacion = '';

const actualizarDisplay = () => {
  display.textContent = operacion.slice(0, 13) || '0';
};

const calcularResultado = () => {
  try {
    const resultado = eval(operacion);
    operacion = resultado.toString();
    actualizarDisplay();
  } catch {
    operacion = 'Error';
    actualizarDisplay();
  }
};

const manejarClick = (valor) => {
  if (valor === '=') {
    calcularResultado();
  } else {
    operacion += valor;
    actualizarDisplay();
  }
};


botones.forEach(boton => {
  boton.addEventListener('click', () => {
    manejarClick(boton.textContent);
  });
});


display.addEventListener('click', () => {
  operacion = '';
  actualizarDisplay();
});
