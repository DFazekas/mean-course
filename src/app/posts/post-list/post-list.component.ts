import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { Post } from '../post.model';
import { PostsService } from "../posts.service";

@Component({
    selector: "app-post-list",
    templateUrl: "./post-list.component.html",
    styleUrls: ["./post-list.component.css"]
})

// 
export class PostListComponent implements OnInit, OnDestroy {
   // Makes posts bindable from parent component.
    posts: Post[] = [];
    
    // When this Component is no longer part of the DOM, the
    // subscriptions should stop living, otherwise becomes a
    // memory leak. So we store the subscription.
    private postsSub: Subscription;

    // Use "dependency injection". 
    constructor(public postsService: PostsService) {}

    // Automatically called when Angular creates this component.
    ngOnInit() {
        // Fetch posts.
        this.posts = this.postsService.getPosts();

        // Setup listener to that Subject.
        // First argument executes whenever new data is emitted.
        this.postsSub = this.postsService.getPostUpdateListener()
            .subscribe((posts: Post[]) => {
                // Update posts whenever new value is recieved.
                this.posts = posts;
        });
    }

    // Automatically called when Angular removes this component.
    ngOnDestroy() {
        // Unsubscribe to postService.
        this.postsSub.unsubscribe();
    }
}