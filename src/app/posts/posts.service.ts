import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

import { Post } from "./post.model";

// Provices this on the root level. So Angular can now find it,
// and will only make one instance for the entire app.
@Injectable({providedIn: 'root'})
export class PostsService {
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    getPosts() {
        // Return a copy of the posts, not a reference.
        // Use Spread operator; `[]` creates new array; 
        // `...` pulls all elements out into the new array.
        return [...this.posts];
    }

    getPostUpdateListener() {
        // Listens to postsUpdated Subject. 
        return this.postsUpdated.asObservable();
    }

    addPost(title: string, content: string) {
        const post: Post = {title: title, content: content};
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
    }
}