import { APP_BASE_HREF, DOCUMENT, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tyracraft-github-pages';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(APP_BASE_HREF) public baseHref: string,
    private viewportScroller: ViewportScroller
  ) {
    document.location;
  }

  public isSectionActive(anchor: string): boolean {
    return this.document.location.hash == anchor;
  }

  public navigateToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
