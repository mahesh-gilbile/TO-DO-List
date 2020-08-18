import { Component, OnInit, Input,} from '@angular/core';
import { UserServices } from '../../User.services';
import { List } from 'src/app/Shared/Model/Main.model';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {

  @Input() index_num:number;
  @Input() list:List;

  constructor(private userServices:UserServices) { }

  ngOnInit(): void {
  }

}
