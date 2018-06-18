import { Component, EventEmitter, Output } from "@angular/core";

// By adding a TS Decorator to our TS class, Angular uses it as a Component.
// The Component Decorator takes some configuration in the form of a JS object.
@Component({
    // Selector allows using that Component.
    // The convention is to start with 'app-' to avoid clashes with normal HTML files.
    selector: 'app-post-create',
    // Point the HTML file to get the template.
    templateUrl: './post-create.component.html',
    // Point to the CSS file to get the styles.
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
    enteredTitle = "";
    enteredContent = "";
    // An event that be listened to by parent component.
    @Output() postCreated = new EventEmitter();

    onAddPost() {
        const post = {
            title: this.enteredTitle,
            content: this.enteredContent
        };
        // Emit our newly created Post for the post-list 
        // component to receive.
        this.postCreated.emit(post);    
    }
}