import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IndexComponent } from './index.component';
import { DockModule } from 'primeng/dock';
import { IndexRouting } from './index-routing.module';
import { GalleriaModule } from 'primeng/galleria';
import { DialogModule } from 'primeng/dialog';
import { TreeModule } from 'primeng/tree';
import { TerminalModule } from 'primeng/terminal';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';





@NgModule({
    imports: [ DockModule, DialogModule,TreeModule, TerminalModule, GalleriaModule,MenubarModule, ToastModule, IndexRouting  ],
    exports: [],
    declarations: [ IndexComponent ],
    providers: []
})
export class IndexModule { }