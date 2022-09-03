import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = "a";
  title = 'appName';
  /*
  getRequest(String: url) {
    return fetch(url).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Bad response");
      }
    });
  }
  
  getData(String: url) {
    getRequest(url).then((data) => {
      const filtered = data.results.filter(
        (result) => result.poster_path !== null
      );
      Data.value = filtered;
    });
  }
  */
  
}
