export interface UserObject {
    gender: string,
    name: NameObject,
    location: LocationObject,
    email: string,
    phone: string,
    cell: string,
    picture: PictureObject,
    nat: string,
    login: LoginObject,
    dob: DobObject
}

export interface NameObject {
    title: string,
    first: string,
    last: string
}

export interface LocationObject {
    street: StreetObject,
    city: string,
    state: string,
    country: string,
    postcode: number,
    coordinates: CoordinatesObject
}

export interface StreetObject {
    number: number
    name: string
}

export interface CoordinatesObject {
    latitude: string,
    longitude: string
}

export interface PictureObject {
    large: string,
    medium: string,
    thumbnail: string
}

export interface LoginObject {
    uuid: string,
    username: string,
    password: string,
    salt: string,
    md5: string,
    sha1: string,
    sha256: string
}

export interface DobObject {
    date: string,
    age: number
}
