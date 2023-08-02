import { APP_BASE_HREF, DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { AppService } from './app.service';

interface Assets {
  name: string;
  browser_download_url: string;
}

interface Release {
  tag_name: string;
  assets: Array<Assets>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'tyracraft-github-pages';

  public tagName: string = '';
  public elfDownloadUlr: string = '';
  public assetsDownloadUlr: string = '';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(APP_BASE_HREF) public baseHref: string,
    private viewportScroller: ViewportScroller,
    public appService: AppService
  ) {
    document.location;
  }

  public isSectionActive(anchor: string): boolean {
    return this.document.location.hash == anchor;
  }

  public navigateToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  ngOnInit(): void {
    this.appService.getReleases().subscribe((response: Array<Release>) => {
      const release = response[0];
      this.tagName = release.tag_name;
      release.assets.forEach((asset) => {
        const fileExtension = asset.name.split('.').pop();

        if (fileExtension === 'elf') {
          this.elfDownloadUlr = asset.browser_download_url;
        } else if (fileExtension === '7z') {
          this.assetsDownloadUlr = asset.browser_download_url;
        }
      });
    });
  }
}
