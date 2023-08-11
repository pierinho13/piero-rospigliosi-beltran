import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IndexComponent } from './index.component';
import { DockModule } from 'primeng/dock';
import { IndexRouting } from './index-routing.module';

@NgModule({
    imports: [ DockModule, IndexRouting  ],
    exports: [],
    declarations: [ IndexComponent ],
    providers: []
})
export class IndexModule { }