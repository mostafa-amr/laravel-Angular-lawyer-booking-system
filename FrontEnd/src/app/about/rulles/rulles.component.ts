import { Component,ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rulles',
  templateUrl: './rulles.component.html',
  styleUrls: ['./rulles.component.css']
})
export class RullesComponent {

  showsWebIcon = false;
  showsPublicIcon = false;
  
  @ViewChild('ourRules') divFive!: ElementRef;
  
  private hideAllIcons() {
    this.showsWebIcon = false;
    this.showsPublicIcon = false;
  }
  
  @HostListener('document:scroll', ['$event'])
  
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const boundingRectFive = this.divFive.nativeElement.getBoundingClientRect();///
  
    if (boundingRectFive.top <= 250 ) {
      setTimeout(() => { this.showsWebIcon = true; }, 500);
    }  else {
      this.hideAllIcons();
    }
    // console.log(boundingRectFive);
  
  }
}
