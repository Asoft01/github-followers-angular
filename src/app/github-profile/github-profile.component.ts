import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent  {

  // constructor(private route: ActivatedRoute) { }
  constructor(private router: Router){ }

    // let id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    
    // Second Method // 
    // this.route.paramMap
    //   .subscribe(params => {
    //     console.log(params.get('id'));
    //     // console.log(params);
    //     // let id = +params.get('id');
    //     // console.log(id);
    //   });

    // console.log("GithubProfile OnInit");

  submit(){
    this.router.navigate(['/followers'], {
      queryParams: {page : 1, order: 'newest'}
    });
  }
}
