<template>
  <div>
    <h1>Hello World</h1>
    <p>This is my first Vue app.</p>
    <AtomButton>567890</AtomButton>
  </div>
</template>

<script lang="ts" setup>
import { AtomButton } from "../packages/components/button/index";
</script>
<script lang="ts">
export default {
  name: "App",
};
</script>
