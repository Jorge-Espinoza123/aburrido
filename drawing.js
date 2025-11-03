let canvas;

window.addEventListener('load', () => {
  canvas = new fabric.Canvas('bigcanvas', {
    isDrawingMode: true,
    backgroundColor: 'white'
  });

  canvas.freeDrawingBrush.width = 15;
  canvas.freeDrawingBrush.color = 'black';
});

function limpiar() {
  canvas.clear();
  canvas.backgroundColor = 'white';
  canvas.renderAll();
}
