import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
@Component({
  selector: 'app-bookbyname',
  templateUrl: './bookbyname.component.html',
  styleUrls: ['./bookbyname.component.css']
})
export class BookbynameComponent implements OnInit {
  title:any;

  book:any;
  constructor(private activatedRoute:ActivatedRoute,private bookService:BookService) 
  {
    
    this.title=this.activatedRoute.snapshot.paramMap.get('title'); 
    
    this.bookService.getBookByName(this.title).subscribe((response)=>{
        this.book=response;
    })
 
  
   }

  ngOnInit(): void {
  }

}
