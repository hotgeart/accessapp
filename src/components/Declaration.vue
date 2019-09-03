<template>
  <div v-if="json !== null">
    <h1>{{ $t("text.title") }}</h1>

    <p>
      {{ json.orgname }} lorem ipsum
    </p>
  </div>
</template>

<script>
export default {
  name: "Declaration",
  props: {
    json: Object
  }
};
</script>

