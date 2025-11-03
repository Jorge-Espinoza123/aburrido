let canvas;

window.addEventListener('load', () => {
  canvas = new fabric.Canvas('bigcanvas', {
    isDrawingMode: true
  });

  // Configurar pincel
  canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
  canvas.freeDrawingBrush.width = 15;
  canvas.freeDrawingBrush.color = 'black';

  // Asegurar fondo blanco
  canvas.backgroundColor = 'white';
  canvas.renderAll();

  console.log("🖊️ Listo para dibujar!");
});

function limpiar() {
  canvas.clear();
  canvas.backgroundColor = 'white';
  canvas.renderAll();
}

