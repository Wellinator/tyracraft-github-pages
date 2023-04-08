import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { anchorScrolling: 'enabled' }),
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: environment.production ? '/tyracraft-github-pages' : '..',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
