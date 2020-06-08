import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

@Module({ namespaced: true })
class UserConfig extends VuexModule {
  public isDarkTheme = false;
  public textColor = "has-text-dark";
  public backgroundColor = "has-background-light";
  public iconType = "is-info";

  @Mutation
  public setTheme(isDark: boolean): void {
    this.isDarkTheme = isDark;
    this.textColor = isDark ? "has-text-light" : "has-text-dark";
    this.backgroundColor = isDark
      ? "has-background-dark"
      : "has-background-light";
    this.iconType = isDark ? "is-primary" : "is-info";
  }

  @Action
  public updateTheme(isDark: boolean): void {
    this.context.commit("setTheme", isDark);
  }
}

export default UserConfig;
