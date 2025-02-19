import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RoleCreateRequest } from '../../interfaces/RoleCreateRequest';

@Component({
  selector: 'app-role-form',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule, FormsModule],
  templateUrl: './role-form.component.html',
  styleUrl: './role-form.component.css'
})
export class RoleFormComponent {
@Input({ required: true }) role!: RoleCreateRequest;
@Output() addRole: EventEmitter<RoleCreateRequest>= new EventEmitter<RoleCreateRequest>();
@Input() errorMessage!:string;

add(){
this.addRole.emit(this.role);
}
}
