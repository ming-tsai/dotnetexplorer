import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

@Module({ namespaced: true, name: "user-config" })
class UserConfig extends VuexModule {
  public isDarkTheme = true;

  @Mutation
  public setTheme(isDark: boolean): void {
    this.isDarkTheme = isDark;
  }

  @Action
  public updateTheme(isDark: boolean): void {
    this.context.commit("setTheme", isDark);
  }
}

export default UserConfig;
