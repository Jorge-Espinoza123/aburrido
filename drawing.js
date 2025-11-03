let canvas;

window.addEventListener("load", () => {
  canvas = new fabric.Canvas("bigcanvas");
  canvas.isDrawingMode = true;

  canvas.freeDrawingBrush.width = 15;
  canvas.freeDrawingBrush.color = "black";
  canvas.setBackgroundColor("white", canvas.renderAll.bind(canvas));

  console.log("🖊️ Listo para dibujar!");
});

function limpiar() {
  canvas.clear();
  canvas.setBackgroundColor("white", canvas.renderAll.bind(canvas));
}

