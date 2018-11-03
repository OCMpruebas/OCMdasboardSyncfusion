import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  primaryXAxis: Object = {
    valueType: 'Category'
  };

  chartData: Object[] = [
    { month: 'Ene', sales: 22 }, { month: 'Feb', sales: 82 },
    { month: 'Mar', sales: 123 }, { month: 'Abr', sales: 34 },
    { month: 'May', sales: 88 }, { month: 'Jun', sales: 67 },
    { month: 'Jul', sales: 23 }, { month: 'Ago', sales: 5 },
    { month: 'Sep', sales: 75 }, { month: 'Oct', sales: 98 },
    { month: 'Nov', sales:  5 }, { month: 'Dic', sales: 32 },
  ];

  chartData1: Object[] = [
    { month: 'Ene', sales: 67 }, { month: 'Feb', sales: 54 },
    { month: 'Mar', sales: 14 }, { month: 'Abr', sales: 2 },
    { month: 'May', sales: 24 }, { month: 'Jun', sales: 54 },
    { month: 'Jul', sales: 56 }, { month: 'Ago', sales: 89 },
    { month: 'Sep', sales: 43 }, { month: 'Oct', sales: 21 },
    { month: 'Nov', sales:  89 }, { month: 'Dic', sales: 12 },
  ];


  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Grafico de prueba';
  }

}
