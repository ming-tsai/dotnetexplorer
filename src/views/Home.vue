<template>
  <section :class="backgroundColor" class="columns content">
    <div class="column">
      <h1 :class="textColor">
        <strong :class="isDarkTheme ? 'has-text-primary' : 'has-text-info'">
          DotNet
        </strong>
        Command Explorer
      </h1>
      <p :class="textColor">
        Find out the command you need without searching on the web
      </p>
      <h4><strong>I want to:</strong></h4>
      <b-field :type="iconType">
        <b-select @input="getSecond" expanded placeholder="...">
          <option
            v-for="option in optionsFirst"
            :value="option.value"
            :key="option.value"
          >
            {{ option.label }}
          </option>
        </b-select>
      </b-field>
      <b-field :type="iconType">
        <b-select
          v-if="isShowSecond"
          v-model="selectedSecond"
          expanded
          placeholder="..."
          @input="getThird"
        >
          <option
            v-for="option in secondOptions"
            :value="option.value"
            :key="option.value"
          >
            {{ option.label }}
          </option>
        </b-select>
      </b-field>
      <b-field v-if="isShowThird" rounded :type="iconType">
        <b-select expanded placeholder="...">
          <option
            v-for="option in thirdOptions"
            :value="option.value"
            :key="option.value"
          >
            {{ option.label }}
          </option>
        </b-select>
      </b-field>
    </div>
    <div class="column"></div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { optionsFirst, optionsSecond, optionsThird } from "@/data/index";
import { Option } from "@/data/option";
const tool = namespace("Tool");
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
  @tool.State
  public isDarkTheme!: boolean;

  @tool.State
  public textColor!: string;

  @tool.State
  public backgroundColor!: string;

  @tool.State
  public iconType!: string;

  public selectedSecond = "";

  public isShowSecond = false;
  public secondOptions: Option[] = [];
  public getSecond(key: string) {
    this.selectedSecond = "";

    if (optionsSecond[key] != undefined) {
      this.secondOptions = optionsSecond[key];
      this.isShowSecond = true;
    } else {
      this.isShowSecond = false;
    }

    this.isShowThird = false;
  }

  public isShowThird = false;
  public thirdOptions: Option[] = [];
  public getThird(key: string) {
    if (optionsThird[key] != undefined) {
      this.thirdOptions = optionsThird[key];
      this.isShowThird = true;
    } else {
      this.isShowThird = false;
    }
  }
}
</script>

<style scoped />
