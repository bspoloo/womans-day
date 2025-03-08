import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-heart',
  imports: [CommonModule, RouterModule],
  templateUrl: './heart.component.html',
  styleUrl: './heart.component.css'
})
export class HeartComponent {
  @Input()
  public herName! : string;
  public isOpen : boolean;
  private router : Router;

  constructor(){
    this.isOpen = false;
    this.router =new Router();
  }
  public openCart() : void {
    if(!this.isOpen){
      this.isOpen = true;
      return;
    }
    this.isOpen = false;
    console.log('open letter');
  }
  public goTo(url : string) : void{
    this.router.navigate([url]);
  }
}
