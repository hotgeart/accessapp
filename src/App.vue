<template>
  <div id="app">
    <LanguageSwitcher />
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="ui-form">
            <div class="ui-card mb-5">
              <div class="custom-file">
                <input
                  type="file"
                  name="file"
                  class="custom-file-input"
                  id="file"
                  ref="file"
                  v-on:change="handleFileUpload()"
                />
                <label class="custom-file-label" for="file">
                  {{ $t('ui.choose_file') }}
                </label>
              </div>
            </div>
          </div>
          <div v-if="json !== null" class="row mb-5">
            <div class="col">
              <div class="float-right">
                <button
                  class="btn btn-primary"
                  @click.prevent="copyToClipboard()"
                >
                  <i class="far fa-copy"></i> {{ $t('ui.copy_html') }}
                </button>
              </div>
            </div>
          </div>
          <div
            v-if="json !== null"
            ref="content"
            id="content"
            class="ui-card mb-5"
          >
            <Declaration v-bind:json="json" />
          </div>
          <textarea
            class="form-control hidden-textarea"
            id="raw"
            v-html="rawHtml"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Declaration from "./components/Declaration.vue";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";

export default {
  name: "app",
  components: {
    Declaration,
    LanguageSwitcher
  },

  data: function() {
    return {
      file: null,
      json: null,
      rawHtml: null
    };
  },

  created: function() {},

  watch: {
    json: function() {
      this.$nextTick().then(() => {
        this.rawHtml = this.$refs.content.innerHTML;
      });
    }
  },

  methods: {
    handleFileUpload() {
      let that = this;
      this.file = this.$refs.file.files[0];
      const reader = new FileReader();

      reader.onload = function(e) {
        that.json = JSON.parse(e.target.result);
      };

      reader.readAsText(this.file);
    },

    copyToClipboard() {
      var copyText = document.getElementById("raw");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
      this.$toast(this.$t("ui.alert_copied"));
    }
  }
};
</script>

<style lang="scss">
body {
  background: #f2f7fa;
  &:before {
    content: "";
    display: block;
    background: url("./assets/border.png") center top repeat-y;
    background-size: 100% auto;
    height: 5px;
  }
}
.ui-form {
  padding-left: 120px;
  background: url("./assets/logo.png") center left no-repeat;
}
.hidden-textarea {
  position: absolute;
  left: -99999999px;
}
.ui-card {
  padding: 2rem;
  background: #fff;
  color: #666;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
}
</style>
