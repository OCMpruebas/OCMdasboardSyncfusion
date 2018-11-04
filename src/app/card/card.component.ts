import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation, Inject } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
  // encapsulation: ViewEncapsulation.None
})

export class CardComponent implements OnInit {

//   constructor( @Inject('sourceFiles') private sourceFiles: any) {
//     sourceFiles.files = ['card.component.css'];
// }

  ngOnInit() {
  }

}
