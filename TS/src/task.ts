//Definir la clase Task
export class Tarea{
    descripcion: string;
    completado: boolean;

    //constructor de la clase Tarea
    constructor(descripcion: string){
        this.descripcion = descripcion;
        this.completado = false;
    }

    //Método para marcar la tarea completada
    tareaCompletada(){
        this.completado = !this.completado;
    }
}
