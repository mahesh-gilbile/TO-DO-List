import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector : '[appDropDown]'
})

export class DropDownDirective{

    constructor(private eleref:ElementRef) { }

    @HostBinding('class.open') isOpen = false;

    @HostListener('document:click' , ['$event']) toggleOpen(event:Event){
         this.isOpen = this.eleref.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
}