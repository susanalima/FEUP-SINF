const Factory = use("Factory");
const Database = use("Database");

class CompanySeeder {
  async run() {
    await Factory.model("App/Models/Company").create({
      name: 'intercompany',
      tenant: "22",
      organization: "22-0001",
      clientId: "FEUP-SINF",
      clientSecret: "a"
    });
    await Factory.model("App/Models/Company").create({
      name: "feup",
      tenant: "22",
      organization: "22-0001",
      clientId: "FEUP-SINF-2",
      clientSecret: "v"
    });
    await Factory.model("App/Models/Company").create({
      name: "ritaNorinho",
      tenant: "22",
      organization: "22",
      clientId: "FEUP-SINF",
      clientSecret: "d"
    });
  }
}
module.exports = CompanySeeder;
