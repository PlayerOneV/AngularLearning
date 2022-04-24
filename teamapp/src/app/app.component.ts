import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = ""
  members: string[] = [];
  errorMessage = ""

  getnameMember(member: string) {
    this.newMemberName = member

    //console.log(this.newMemberName)
  }

  addMember() {

    if (!this.newMemberName) {//Si no hay nada en el input para guardar
      this.errorMessage = "Name can't be empty"
      return
    } else {
      this.members.push(this.newMemberName)
      this.newMemberName = "" //Limpiamos el input
      this.errorMessage = ""
    }

    //console.log(this.members)
  }
}
