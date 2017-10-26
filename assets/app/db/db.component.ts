import
{
    Component
} from '@angular/core';

import
{
    HttpClient
} from '@angular/common/http';

import
{
    MdSnackBar
} from '@angular/material';

@Component
({
    selector: 'app-db',
    templateUrl: './db.component.html',
    styleUrls: ['../../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css', '../main/main.styles.css']
})

export class dbComponent
{
    constructor
    (
        private http: HttpClient,
        private SnackBar: MdSnackBar
    )
    {}

    GenDBForums()
    {
        this.http.head('/db/create/forums/').subscribe();
    }
    GenDBThreads()
    {
        this.http.head('/db/create/threads/').subscribe();
    }
    GenDBPosts()
    {
        this.http.head('/db/create/posts/').subscribe();
    }

    CheckDBForums()
    {
        this.http.head('/db/check/forums/').subscribe();
    }

    CheckDBThreads()
    {
        this.http.head('/db/check/threads/').subscribe();
    }
}