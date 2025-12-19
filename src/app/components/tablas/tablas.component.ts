import { Component, Input, OnInit } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { TablePipePipe } from "../../pipes/table-pipe-pipe";

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss'],
  standalone: false
})
export class TablasComponent  implements OnInit {

  @Input() datosTabla: any[] = [];
  
  constructor() { }

  ngOnInit() {}

}
