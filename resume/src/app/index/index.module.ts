import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IndexComponent } from './index.component';
import { DockModule } from 'primeng/dock';
import { IndexRouting } from './index-routing.module';
import { GalleriaModule } from 'primeng/galleria';
import { DialogModule } from 'primeng/dialog';
import { TreeModule } from 'primeng/tree';
import { TerminalModule, TerminalService } from 'primeng/terminal';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';





@NgModule({
    imports: [ TerminalModule, DockModule, DialogModule,TreeModule, GalleriaModule,MenubarModule, ToastModule, IndexRouting  ],
    exports: [],
    declarations: [ IndexComponent ],
    providers: [TerminalService]
})
export class IndexModule { }