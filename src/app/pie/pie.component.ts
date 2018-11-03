import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  data: Object[] = [
    { x: 'Cultura', y: 18, text: '18%' },
    { x: 'Educación', y: 12, text: '12%' },
    { x: '2', y: 18, text: '18%' },
    { x: '3', y: 18, text: '18%' },
    { x: '4', y: 18, text: '18%' },
    { x: '5', y: 18, text: '18%' },
    { x: '6', y: 18, text: '18%' }
  ];

  data1: Object[] = [
    { x: 'Otro', y: 42, text: '42%' },
    { x: 'Vial', y: 12, text: '12%' },
    { x: '2', y: 18, text: '18%' },
    { x: '3', y: 18, text: '18%' },
    { x: '4', y: 18, text: '18%' },
    { x: '5', y: 18, text: '18%' },
    { x: '6', y: 18, text: '18%' }
  ];

// Iniciando dataLabel
dataLabel: Object = {
  visible: true,
  name: 'text',
  position: 'Inside',
  font: {
    fontWeight: '600',
    color: 'black'
  }
};

title: string
startAngle: number = 270;
endAngle: number = 90;
tooltip: Object = {enable: true, format: '${point.x} : <b>${point.y}%</b>' };


  constructor() { }

  ngOnInit() {
    this.title = 'Grafico de prueba';
  }

}
