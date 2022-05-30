
import { BehaviorSubject } from "rxjs";
import { UserObject } from "../models/interface";

export const rowUser$ = new BehaviorSubject<UserObject[]>([]);
export const isUser$ = new BehaviorSubject<boolean>(false);
export const userState = isUser$.asObservable();


fetch(`${process.env.REACT_APP_API_BASE_URL}`)
    .then(res => res.json())
    .then(data => rowUser$.next(data.results))
    .catch(error => console.log(error))


export const userStateHandler = (state: boolean) => {
    isUser$.next(state);
}    