import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '@app/app.component';
import { NavbarComponent } from '@app/components/navbar/navbar.component';
import { LogFormComponent } from '@app/components/log-form/log-form.component';
import { LogsComponent } from '@app/components/logs/logs.component';

import { LogService } from '@app/services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogFormComponent,
    LogsComponent
  ],
  imports: [BrowserModule],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
