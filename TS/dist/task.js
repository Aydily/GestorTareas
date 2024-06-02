//Definir la clase Task
var Tarea = /** @class */ (function () {
    //constructor de la clase Tarea
    function Tarea(descripcion) {
        this.descripcion = descripcion;
        this.completado = false;
    }
    //Método para marcar la tarea completada
    Tarea.prototype.tareaCompletada = function () {
        this.completado = !this.completado;
    };
    return Tarea;
}());
export { Tarea };
