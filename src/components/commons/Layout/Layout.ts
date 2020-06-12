import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

import Footer from "@/components/commons/Footer/Footer.vue";
import Header from "@/components/commons/Header/Header.vue";

const theme = namespace("Theme");
@Component({
  components: {
    Footer,
    Header
  }
})
export default class Layout extends Vue {
  @theme.State
  public isDarkTheme!: boolean;

  @theme.State
  public textColor!: string;

  @theme.State
  public backgroundColor!: string;

  @theme.State
  public iconType!: string;
}
