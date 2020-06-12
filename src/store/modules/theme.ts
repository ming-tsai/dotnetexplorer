import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

@Module({ namespaced: true })
class Theme extends VuexModule {
  public isDarkTheme = false;
  public textColor = "has-text-dark";
  public backgroundColor = "has-background-light";
  public iconType = "is-info";
  public cardStyle: { [key: string]: string } = {
    "border-left": "10px solid",
    "border-left-color": "#167DF0",
    "border-radius": "10px",
    "background-color": "#20252d"
  };

  @Action
  public updateTheme(isDark: boolean): void {
    this.context.commit("setTheme", isDark);
  }

  @Mutation
  private setTheme(isDark: boolean): void {
    this.isDarkTheme = isDark;
    this.textColor = isDark ? "has-text-light" : "has-text-dark";
    this.backgroundColor = isDark
      ? "has-background-dark"
      : "has-background-light";
    this.iconType = isDark ? "is-primary" : "is-info";
    this.cardStyle["border-left-color"] = isDark ? "#7957d5e6" : "#167DF0";
    this.cardStyle["background-color"] = isDark ? "#ffffff33" : "#20252d";
  }
}

export default Theme;
