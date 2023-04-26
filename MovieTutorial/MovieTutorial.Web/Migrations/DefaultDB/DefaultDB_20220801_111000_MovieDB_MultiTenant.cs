using FluentMigrator;

namespace MovieTutorial.Migrations.DefaultDB
{
    [Migration(20220801_111000)]
    public class DefaultDB_20220801_111000_MovieDB_MultiTenant
        : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Person").InSchema("mov")
                .AddColumn("TenantId").AsInt32()
                    .NotNullable().WithDefaultValue(1);

            Alter.Table("Genre").InSchema("mov")
                .AddColumn("TenantId").AsInt32()
                    .NotNullable().WithDefaultValue(1);

            Alter.Table("Movie").InSchema("mov")
                .AddColumn("TenantId").AsInt32()
                    .NotNullable().WithDefaultValue(1);
        }
    }
}