import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styles: [
  ]
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;

  public interval$?: Subscription;

  ngOnInit() {
    console.log('Price Component: ngOnInit')
    this.interval$ = interval(1000).subscribe(value => console.log(`Tiks: ${value}`))
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Price Component: ngOnChanges')
    console.log({ changes })
  }

  ngOnDestroy() {
    console.log('Price Component: ngOnDestroy')
    this.interval$?.unsubscribe();
  }

}
