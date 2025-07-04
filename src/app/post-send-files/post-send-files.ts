import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post-send-files',
  imports: [CommonModule],
  templateUrl: './post-send-files.html',
  styleUrl: './post-send-files.scss',
})
export class PostSendFiles {
  resposta: any;

  constructor(private http: HttpClient) {}

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    const formData = new FormData();
    formData.append('arquivo', file, file.name);

    this.http
      .post('hrrps://httpbin.org/post', formData)
      .subscribe((res) => (this.resposta = res));
  }
}
