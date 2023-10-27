import { TDataFilms, TCategory } from "../services/TodoTypes";
import data from "./data.json";

export const Category: TCategory[] = data.category;
export const films: TDataFilms[] = data.data

export function createCategory(dataCategory: TCategory): void {
    Category.push(dataCategory);
}

export function createFilms(dataFilms: TDataFilms): void {
    films.push(dataFilms);
}

export function deleteFilmSelected(id: string): void {
    const index = films.findIndex(film => film.id === id);
    films.splice(index, 1);
}

export function updateFilmSelected(id: string, dataFilms: TDataFilms): void {
    const index = films.findIndex(film => film.id === id);
    films[index] = dataFilms;
}

export function detailFilmSelected(id: string): TDataFilms | undefined {
    return films.find(film => film.id === id);
}

export const randomString = Math.random().toString(36).substring(2);