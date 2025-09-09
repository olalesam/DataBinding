import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  title: string  = "Demo du data Binding";

  status : boolean = false;

   constructor(){

   }

   ngOnInit(): void{

   }

   changerTitre(){
      this.title = "New title"
   }
}
