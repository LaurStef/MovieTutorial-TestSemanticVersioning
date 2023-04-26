namespace MovieTutorial.MovieDB {
    export interface MovieForm {
        Title: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        PrimaryImage: Serenity.TextAreaEditor;
        GalleryImages: Serenity.MultipleImageUploadEditor;
        Storyline: Serenity.TextAreaEditor;
        Year: Serenity.IntegerEditor;
        ReleaseDate: Serenity.DateEditor;
        GenreList: Serenity.LookupEditor;
        Kind: Serenity.EnumEditor;
        Runtime: Serenity.IntegerEditor;
    }

    export class MovieForm extends Serenity.PrefixedContext {
        static formKey = 'MovieDB.Movie';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MovieForm.init)  {
                MovieForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.MultipleImageUploadEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.DateEditor;
                var w5 = s.LookupEditor;
                var w6 = s.EnumEditor;

                Q.initFormType(MovieForm, [
                    'Title', w0,
                    'Description', w1,
                    'PrimaryImage', w1,
                    'GalleryImages', w2,
                    'Storyline', w1,
                    'Year', w3,
                    'ReleaseDate', w4,
                    'GenreList', w5,
                    'Kind', w6,
                    'Runtime', w3
                ]);
            }
        }
    }
}
