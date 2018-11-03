import { Component, OnInit } from '@angular/core';
import { ObjectType } from '@syncfusion/ej2-pdf-export';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  filterSetting: Object = { type: 'checkbox'};

  data: Object [] = [
    {ProgramaID : 12248, NombrePrograma: 'Cultura', OrganicoID: 5},
    {ProgramaID : 12247, NombrePrograma: 'Participación', OrganicoID: 4},
    {ProgramaID : 12246, NombrePrograma: 'Infraestructuras', OrganicoID: 1},
  ];
  constructor() { }

  ngOnInit() {
  }

}
