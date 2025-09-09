import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  title: string  = "Demo du data Binding";

  status : boolean = false;

  nom : string= "Olale Coumba Sam";

   constructor(){

   }

   ngOnInit(): void{

   }

   changerTitre(){
      this.title = "New title"
   }
}
