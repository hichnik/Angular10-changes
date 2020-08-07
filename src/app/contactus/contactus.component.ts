import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit, AfterViewInit {

  id: number;
  @ViewChild('input') input: ElementRef<HTMLInputElement>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  onChange(v: string): void {
    console.log(`value: ${v}`);
  }

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'input')
      .subscribe((v: any) => console.log(`fromEvent: ${v.target.value}`));
  }

}
