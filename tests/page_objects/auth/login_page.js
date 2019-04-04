import { t, Selector } from 'testcafe';
export default class loginPage extends BasePage {
  constructor() {
    super();
    this.pathName = `/seller/auth/login`;
    this.userName = Selector('.ts-textfield-officeemail');
    this.password = Selector('.ts-textfield-password');
    this.btnLogin = Selector('.ts-button-login');
  }

  async goToPage() {
    await t.navigateTo(this.pathName);
  }
  async inputTextUserName(name) {
    await t.typeText(this.userName, name);
  }
  async inputTextPassword(password) {
    await t.typeText(this.password, password);
  }
  async clickButtonLogin() {
    await t.click(this.btnLogin);
  }
}