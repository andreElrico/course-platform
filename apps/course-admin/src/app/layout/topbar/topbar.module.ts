import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { TopbarComponent } from './topbar.component';

@NgModule({
  declarations: [TopbarComponent],
  imports: [CommonModule, SharedModule],
  exports: [TopbarComponent],
  providers: [],
})
export class TopbarModule {}
