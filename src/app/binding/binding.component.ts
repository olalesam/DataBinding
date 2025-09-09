import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  title: string  = "Demo du data Binding";

  status : boolean = true;

   constructor(){

   }

   ngOnInit(): void{

   }
}
