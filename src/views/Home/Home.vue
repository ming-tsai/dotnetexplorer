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
      <h4><strong :class="textColor">I want to:</strong></h4>
      <b-field :type="iconType">
        <b-select @input="filterSecond" expanded placeholder="...">
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
            :value="option"
            :key="option.value"
          >
            {{ option.label }}
          </option>
        </b-select>
      </b-field>
      <b-field v-if="isShowThird" rounded :type="iconType">
        <b-select expanded @input="showCard" placeholder="...">
          <option
            v-for="option in thirdOptions"
            :value="option"
            :key="option.value"
          >
            {{ option.label }}
          </option>
        </b-select>
      </b-field>
    </div>
    <div class="column">
      <br />
      <div v-if="selectedUsage">
        <h1 :class="textColor">Usage:</h1>
        <div class="tile">
          <div
            class="tile is-child notification is-dark columns is-mobile"
            :style="cardStyle"
          >
            <div
              class="has-text-weight-medium is-family-code column"
              style="padding-left: 0px"
            >
              <vue-type-text :text="selectedUsage" :timeTakes="3000" />
            </div>
            <div class="column is-1 is-vcentered">
              <a
                v-clipboard="selectedUsage"
                v-clipboard:success="clipboardSuccessHandler"
              >
                <b-icon type="is-light" pack="far" icon="copy"> </b-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div v-if="selectedNote">
        <h1 :class="textColor">Note:</h1>
        <div class="tile">
          <div class="tile is-child notification is-dark" :style="cardStyle">
            <div
              class="has-text-weight-medium is-family-code"
              style="padding-left: 0px"
            >
              <vue-type-text :text="selectedNote" :timeTakes="3000" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./Home.ts"></script>
<style src="./Home.css"></style>
