import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const theme = namespace("Theme");
@Component
export default class Header extends Vue {
  @theme.State
  public isDarkTheme!: boolean;

  @theme.State
  public textColor!: string;

  @theme.State
  public backgroundColor!: string;

  @theme.State
  public iconType!: string;

  @theme.Action
  public updateTheme!: (isDark: boolean) => Promise<boolean>;
}
