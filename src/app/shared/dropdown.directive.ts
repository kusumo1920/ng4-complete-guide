import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: "[appDropdown]",
})
export class DropdownDirective {
  // @HostBinding("class.open") isOpen = false;
  isOpen = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener("document:click", ["$event"])
  toggleOpen(event: Event) {
    // this.isOpen = !this.isOpen;
    console.log(this.elRef)
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    const action = this.isOpen ? "addClass" : "removeClass";
    this.renderer[action](this.elRef.nativeElement, "open");
  }
}
