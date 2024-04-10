interface CityInfo {
    name: string;
    local_names: { [languageCode: string]: string };
    lat: number;
    lon: number;
    country: string;
    state: string;
}

export type LocationsAPIResponse = CityInfo[];

export type City = CityInfo;
