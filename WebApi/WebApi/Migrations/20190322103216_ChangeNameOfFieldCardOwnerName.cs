using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApi.Migrations
{
    public partial class ChangeNameOfFieldCardOwnerName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CardOwneName",
                table: "PaymentDetails",
                newName: "CardOwnerName");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CardOwnerName",
                table: "PaymentDetails",
                newName: "CardOwneName");
        }
    }
}
