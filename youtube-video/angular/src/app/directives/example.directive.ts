import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective implements OnInit {

  constructor(private element:ElementRef) 
  {
    element.nativeElement.style.backgroundColor = "red";
    $ (element.nativeElement).fadeOut(2000).fadeIn();

   }
   ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.color;
    $ (this.element.nativeElement).fadeOut(2000).fadeIn();
   }

   @Input() color: string = ''; 
  
   @HostListener ("click")
   onClick () {
    alert ("click")
   }

   @HostBinding ("style.color")
   writingColor:string = "red"

}
