import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html"
})
export class ServerComponent {
    serverId: number = 1;
    serverName: string = "MyServer";
}