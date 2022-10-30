import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  newTask: string = "";

  List = [
    {
      title: 'Comer calabazas', isDone: false,
    },
    { title: 'Pagar fantas', isDone: false },
    { title: 'Conquistar su corazon', isDone: false },
  ];

   newTarea(nuevaTarea: string){
    this.List.push({title: nuevaTarea, isDone:false})
   }

   deleteTarea(){
    this.List.pop()
   }

  }





