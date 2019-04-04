import { t, Selector } from 'testcafe';
export default class dashboardPage extends BasePage {
  constructor() {
    super();
    this.pathName = `/seller/dashboard`;
    this.companyName = Selector('.uk-margin.company-title');
  }

  async goToPage() {
    await t.navigateTo(this.pathName);
  }
  async assertCompanyName(companyName) {
    await t.expect(this.companyName.innerText).eql(companyName);
  }
}