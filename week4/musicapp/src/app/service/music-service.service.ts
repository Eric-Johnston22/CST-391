import { Injectable } from '@angular/core';
import exampledata from '../../data/sample-music-data.json';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/Album';
import { Artist } from '../models/Artist';

@Injectable({ providedIn: 'root' })
export class MusicServiceService {

  private host = "http://localhost:5000"
  //albums: Album[] = exampledata;

  constructor(private http: HttpClient) {}
 


  
  
  public getArtists(callback: (artists: Artist[]) => void): void {

    this.http.get<Artist[]>(this.host + "/artists")
      .subscribe((artists: Artist[]) => {
        callback(artists);
      });
  }


  public getAlbums(artistName: string, callback:(albums: Album[]) => void): void {
    let request = this.host + `/albums/${artistName}`;
    console.log('request', request);
    this.http.get<Album[]>(request).subscribe((albums: Album[]) => {
      console.log('have albums', albums);
      callback(albums);
    });
  }

  public getAlbumsOfArtist(artistName: String, callback: (albums: Album[]) => void): void {

    let request = this.host + `/albums/${artistName}`;
    console.log("request", request);
    this.http.get<Album[]>(request).
      subscribe((albums: Album[]) => {
        console.log("have albums", albums);
        callback(albums);
      });
  }

  public createAlbum(album: Album, callback: () => void): void {
    // Add a new album
    this.http.post<Album>(this.host + "/albums", album)
      .subscribe((data) => {
        callback();
      });
  }

  public updateAlbum(album: Album, callback: () => void): void {
    this.http.put<Album>(this.host + "/albums", album)
      .subscribe((data) => {
        callback();
      });
  }

  public deleteAlbum(id: number, callback: () => void ): void {
    this.http.delete(this.host + "/albums/" + id)
      .subscribe((data) => {
        callback();
      });
  }
}
