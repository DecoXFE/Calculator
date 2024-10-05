import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Calculator';
  actualValue = '';
  
  onSelectNumber(buttonElement:any){
    let value = buttonElement.textContent;
    this.actualValue += value;
    document.getElementById("display")?.setAttribute("value", this.actualValue);
  }

  onSelectClear(){
    this.actualValue="";
    document.getElementById("display")?.setAttribute("value","");
  }

  onSelectEquals(){
    this.actualValue = eval(this.actualValue).toString();
    document.getElementById("display")?.setAttribute("value",this.actualValue);
    if(this.actualValue=="0"){
      this.actualValue = ""
    }
  }

  onSelectDelete(){
    this.actualValue = this.actualValue.slice(0,-1);
    document.getElementById("display")?.setAttribute("value",this.actualValue);
  }

}
