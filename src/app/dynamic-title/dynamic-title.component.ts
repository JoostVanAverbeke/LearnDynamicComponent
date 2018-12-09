import {Component, Inject, InjectionToken, Input, OnInit} from '@angular/core';

export const TITLE = new InjectionToken<string>('title', { providedIn: 'root',  factory: () => 'title' } );

@Component({
  selector: 'app-dynamic-title',
  templateUrl: './dynamic-title.component.html',
  styleUrls: ['./dynamic-title.component.css']
})
export class DynamicTitleComponent implements OnInit {
  @Input() title;

  constructor(@Inject(TITLE) private titleInjected: string) {
  }

  ngOnInit() {
    this.title = this.title || this.titleInjected;
  }

}
