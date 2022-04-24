import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  members: string[] = [];
  newMemberName = ""
  teamsNumber: number | "" = ""
  teams: string[][] = []
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
      this.teams = []
    }

    //console.log(this.members)
  }

  getTeamsNumber(number: String) {
    this.teamsNumber = Number(number)
  }

  generateTeams() {

    if (!this.teamsNumber || this.teamsNumber <= 0) {
      this.errorMessage = "Invalid number of teams"
      return

    } else if (this.members.length < this.teamsNumber) {
      this.errorMessage = "Not enogth members"
    } else {
      this.errorMessage = ""
      const allMembers = [...this.members]

      while (allMembers.length) {
        for (let i = 0; i < this.teamsNumber; i++) {

          const element = Math.floor(Math.random() * allMembers.length) //Asignamos una posición al azar que tomaremos
          const member = allMembers.splice(element, 1)[0] //Tomamos el valor en dicha posición guardandolo en un nuevo array y extrayendolo de allMembers

          if (!member) break //Si ya no hay mas miembros por agregar 

          if (this.teams[i]) { //Si ya esta ocupada la posición en el array agregamos el nuevo miembro al final
            this.teams[i].push(member)
          } else { //Si no esta ocupada la posición del array asignamos al nuevo miembro 
            this.teams[i] = [member]
          }

        }
      }
      this.members = []
      this.teamsNumber = ""
    }
  }
}

