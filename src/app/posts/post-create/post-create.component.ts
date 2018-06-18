import { Component } from "@angular/core";

// By adding a TS Decorator to our TS class, Angular uses it as a Component.
// The Component Decorator takes some configuration in the form of a JS object.
@Component({
    // Selector allows using that Component.
    // The convention is to start with 'app-' to avoid clashes with normal HTML files.
    selector: 'app-post-create',
    // Point the HTML file to get the template.
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
    enteredValue = "";
    newPost = "No content";

    onAddPost() {
        this.newPost = this.enteredValue;    
    }
}