import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { MovieComponent } from 'src/movie/movie.component';
import { AboutComponent } from 'src/about/about.component';
import { BookComponent } from "src/book/book.component";
import { ErrorComponent } from 'src/Error/error.component';
import { NewUserComponent } from 'src/signup/signup.component';
import { UserComponent } from "src/user/user.component";
import { DoneComponent } from "src/done/done.component";
import { WishListComponent } from 'src/wishlist/wishlist.component';
import { BookedComponent } from 'src/booked/booked.component';

const routes: Routes = [
  {path:'home' , component : HomeComponent} ,
  {path:'' , component : HomeComponent} ,
  {path:'movies' , component : MovieComponent } ,
  {path:'movie/:name' , component : BookComponent } ,
  {path:'book/:name' , component : BookComponent } ,
  {path:'about' , component : AboutComponent} ,
  {path:'wishlist/:name' , component : WishListComponent} ,
  {path:'signup' , component : NewUserComponent},
  {path:'booked' , component : BookedComponent},
  {path:'user' , component : UserComponent},
  {path:'done' , component : DoneComponent},
  {path:'**' , component : ErrorComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
