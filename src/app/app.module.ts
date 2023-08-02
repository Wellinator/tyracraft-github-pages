import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from 'src/environments/environment';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([], { anchorScrolling: 'enabled' }),
  ],
  providers: [
    AppService,
    {
      provide: APP_BASE_HREF,
      useValue: environment.production ? '/tyracraft' : '..',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
