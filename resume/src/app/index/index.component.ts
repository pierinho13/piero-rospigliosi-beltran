import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TerminalService } from 'primeng/terminal';
import { Subscription, timeout } from 'rxjs';

@Component({
    selector: 'app-index',
    templateUrl: 'index.component.html'
})
export class IndexComponent implements OnInit, OnDestroy {


    subscription: Subscription;

    welcomeMessage:string = "";

    
    constructor(private terminalService:TerminalService) { 
        this.subscription = this.terminalService.commandHandler.subscribe((command) => {
            let response = command === 'date' ? new Date().toDateString() : 'Unknown command: ' + command;
            this.terminalService.sendResponse(response);
        });
    }
  

    ngOnInit() { 

        setTimeout(() => {
            
            this.welcomeMessage = `To increase the performance of the tunnel, consider installing NumPy. For instructions,
            please see https://cloud.google.com/iap/docs/using-tcp-forwarding#increasing_the_tcp_upload_bandwidth
            
            Linux produccion1 4.19.0-25-cloud-amd64 #1 SMP Debian 4.19.289-1 (2023-07-24) x86_64
            
            The programs included with the Debian GNU/Linux system are free software;
            the exact distribution terms for each program are described in the
            individual files in /usr/share/doc/*/copyright.
            
            Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
            permitted by applicable law.`;
        }, 200);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}