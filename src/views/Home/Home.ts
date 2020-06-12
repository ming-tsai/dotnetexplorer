import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { optionsFirst, optionsSecond, optionsThird } from "@/data/index";
import { Option } from "@/data/option";
const theme = namespace("Theme");
@Component({
  data() {
    return {
      optionsFirst,
      optionsSecond,
      optionsThird
    };
  }
})
export default class Home extends Vue {
  @theme.State
  public isDarkTheme!: boolean;

  @theme.State
  public textColor!: string;

  @theme.State
  public backgroundColor!: string;

  @theme.State
  public iconType!: string;

  @theme.State
  public cardStyle!: { [key: string]: string };

  public selectedSecond: string | null = null;
  public selectedUsage: string | null = null;
  public selectedNote: string | null = null;
  public isShowSecond = false;
  public secondOptions: Option[] = [];

  public getSecond(key: string) {
    this.selectedSecond = null;

    if (optionsSecond[key] != undefined) {
      this.secondOptions = optionsSecond[key];
      this.isShowSecond = true;
    } else {
      this.isShowSecond = false;
    }

    this.isShowThird = false;
    this.showCard();
  }

  public isShowThird = false;
  public thirdOptions: Option[] = [];
  public getThird(option: Option) {
    if (option.usage == null && optionsThird[option.value] != undefined) {
      this.thirdOptions = optionsThird[option.value];
      this.isShowThird = true;
    } else {
      this.isShowThird = false;
    }
    this.showCard(option);
  }

  public showCard(option: Option | null = null) {
    this.showUsage(option);
    this.showNote(option);
  }

  private showUsage(option: Option | null = null) {
    if (option != null && option.usage != null) {
      this.selectedUsage = option.usage;
    } else {
      this.selectedUsage = null;
    }
  }

  private showNote(option: Option | null = null) {
    if (option != null && option.note != null) {
      this.selectedNote = option.note;
    } else {
      this.selectedNote = null;
    }
  }

  public clipboardSuccessHandler() {
    this.$buefy.toast.open({
      message: "Code copied!!",
      type: this.iconType,
      position: "is-bottom-right"
    });
  }
}
