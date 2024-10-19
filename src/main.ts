import {
  Component,
  provideExperimentalZonelessChangeDetection,
} from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  standalone: true,
  template: `bare-angular is working!`,
})
class AppComponent {}

bootstrapApplication(AppComponent, {
  providers: [provideExperimentalZonelessChangeDetection()],
});
