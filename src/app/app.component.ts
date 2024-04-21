import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Datum } from './interfaces/cash.model';
import { Welcome } from './interfaces/cash.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bank';
  money:Datum[] = []
  constructor(private dataService:DataService){
    this.dataService.getData().subscribe((data:Welcome) => {
      this.money = data.data;
      console.log(this.money);
    })
  }
}
