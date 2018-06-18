import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostsService } from "../posts.service";

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

    // Connect to PostsService.
    constructor(public postsService: PostsService) {}

    onAddPost(form: NgForm) {
        // If form is valid, create new post.
        if (form.invalid) {
            return;
        }
          
        // Send tite and content to postService.
        this.postsService.addPost(form.value.title, form.value.content);
    }
}