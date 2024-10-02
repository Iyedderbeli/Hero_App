import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit {
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
hero={
  name:'',
  power:0,
  image:'',
}
heroes:any[]=[];
ajout(){
  this.heroes.push(this.hero);
  this.hero={
    name:'',
    power:0,
    image:'',
  }
}
}
