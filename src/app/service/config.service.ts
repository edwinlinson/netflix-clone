import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root",
})

export class ConfigService{
    readonly baseurl = "https://api.themoviedb.org/3";
    readonly apikey = "c719aceb778ec80ec9730e0b1aad8974";
}