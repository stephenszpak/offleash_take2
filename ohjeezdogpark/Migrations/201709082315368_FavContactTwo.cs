namespace ohjeezdogpark.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FavContactTwo : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Contacts",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        DogName = c.String(),
                        OwnerFirstName = c.String(),
                        OwnerLastName = c.String(),
                        PhoneNumber = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Favorites",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        PlaceId = c.Int(nullable: false),
                        Title = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Favorites");
            DropTable("dbo.Contacts");
        }
    }
}
