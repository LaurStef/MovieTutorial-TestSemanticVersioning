﻿namespace MovieTutorial.MovieDB {
    export interface PersonRow {
        PersonId?: number;
        FirstName?: string;
        Lastname?: string;
        Fullname?: string;
        BirthDate?: string;
        BirthPlace?: string;
        Gender?: Gender;
        Height?: number;
        PrimaryImage?: string;
        GalleryImages?: string;
    }

    export namespace PersonRow {
        export const idProperty = 'PersonId';
        export const nameProperty = 'Fullname';
        export const localTextPrefix = 'MovieDB.Person';
        export const lookupKey = 'MovieDB.Person';

        export function getLookup(): Q.Lookup<PersonRow> {
            return Q.getLookup<PersonRow>('MovieDB.Person');
        }
        export const deletePermission = 'General';
        export const insertPermission = 'General';
        export const readPermission = 'General';
        export const updatePermission = 'General';

        export declare const enum Fields {
            PersonId = "PersonId",
            FirstName = "FirstName",
            Lastname = "Lastname",
            Fullname = "Fullname",
            BirthDate = "BirthDate",
            BirthPlace = "BirthPlace",
            Gender = "Gender",
            Height = "Height",
            PrimaryImage = "PrimaryImage",
            GalleryImages = "GalleryImages"
        }
    }
}
