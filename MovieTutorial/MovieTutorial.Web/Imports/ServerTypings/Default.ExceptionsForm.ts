namespace MovieTutorial.Default {
    export interface ExceptionsForm {
        Guid: Serenity.StringEditor;
        ApplicationName: Serenity.StringEditor;
        MachineName: Serenity.StringEditor;
        CreationDate: Serenity.DateEditor;
        Type: Serenity.StringEditor;
        IsProtected: Serenity.BooleanEditor;
        Host: Serenity.StringEditor;
        Url: Serenity.StringEditor;
        HttpMethod: Serenity.StringEditor;
        IpAddress: Serenity.StringEditor;
        Source: Serenity.StringEditor;
        Message: Serenity.StringEditor;
        Detail: Serenity.StringEditor;
        StatusCode: Serenity.IntegerEditor;
        Sql: Serenity.StringEditor;
        DeletionDate: Serenity.DateEditor;
        FullJson: Serenity.StringEditor;
        ErrorHash: Serenity.IntegerEditor;
        DuplicateCount: Serenity.IntegerEditor;
    }

    export class ExceptionsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Exceptions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ExceptionsForm.init)  {
                ExceptionsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(ExceptionsForm, [
                    'Guid', w0,
                    'ApplicationName', w0,
                    'MachineName', w0,
                    'CreationDate', w1,
                    'Type', w0,
                    'IsProtected', w2,
                    'Host', w0,
                    'Url', w0,
                    'HttpMethod', w0,
                    'IpAddress', w0,
                    'Source', w0,
                    'Message', w0,
                    'Detail', w0,
                    'StatusCode', w3,
                    'Sql', w0,
                    'DeletionDate', w1,
                    'FullJson', w0,
                    'ErrorHash', w3,
                    'DuplicateCount', w3
                ]);
            }
        }
    }
}
