import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title = ''; // card component receives input from the app component
  @Input() imageUrl = '';
  @Input() username = '';
  @Input() content = '';

  constructor() { }

  ngOnInit(): void {
  }

}
