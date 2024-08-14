import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FaceService {
  private baseURI = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  captureImage(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseURI}/capture-image/`, formData);
  }

  saveEncodings(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseURI}/save-encoding/`, formData);
  }

  markAttendance(imageBlob: Blob): Observable<any> {
    const formData = new FormData();
    console.log(imageBlob)
    formData.append('file', imageBlob, 'capture.jpg');
    console.log(formData);
    return this.http.post(`${this.baseURI}/mark-attendance/`, formData);
  }
}
