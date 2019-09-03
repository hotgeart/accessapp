<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <ul class="language-switcher">
          <li
            v-for="(lang, i) in langs"
            :key="`Lang${i}`"
            :value="lang"
            @click="$i18n.locale = lang"
            :class="{ 'active' : $i18n.locale == lang}"
          >
            <button type="button" class="btn btn-link">
                {{ lang }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "locale-switcher",
  data: function() {
    return {
      langs: []
    };
  },

  created: function() {
    this.getLocale();
  },

  methods: {
    getLocale() {
      const locales = require.context("../locales", true, /[A-Za-z0-9-_,\s]+\.json$/i)
      locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
          this.langs.push(matched[1]);
        }
      })
    }
  }
};
</script>

<style lang="scss">
.language-switcher {
  padding: 0;
  margin: 10px 0 40px 0;

  li {
    display: inline-block;
    margin: 0 3px 0 0;

    .btn-link {
      cursor: pointer;
      display: inline-block;
      font-size: 12px;
      text-transform: uppercase;
      padding: 2px 5px;
      border-radius: 4px;
      color: #333;

      &:hover,
      &:focus {
        background: rgba(0, 0, 0, 0.2);
      }
    }
    &.active {
      .btn.btn-link {
        background: #484848;
        color: white;
      }
    }
  }
}
</style>