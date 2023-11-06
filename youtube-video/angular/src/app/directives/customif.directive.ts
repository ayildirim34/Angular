import { Directive } from '@angular/core';

@Directive({
  selector: '[appCustomif]'
})
export class CustomifDirective {

  constructor(
    private templateRef : TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }
@Input() set appCustomif(value : boolean) {
 if (value) {
  this.viewContainerRef.clear();
 } else {
  
 }
}

}
