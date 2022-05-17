<script lang="ts">
export default {
  name: "AtomButton",
};
</script>
<script lang="ts" setup>
import { ref, PropType } from "vue";

const _ref = ref<HTMLButtonElement>();
const emit = defineEmits({
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
});
const handleClick = (evt: MouseEvent) => {
  if (props.disabled) {
    evt.preventDefault();
    evt.stopPropagation();
    return;
  }
  if (props.nativeType === "reset") {
    // TODO reset form
  }
  emit("click", evt);
};
const props = defineProps({
  text: { type: String, default: "button" },
  type: { type: String, default: "default" },
  size: { type: String, default: "default" },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  plain: { type: Boolean, default: false },
  round: { type: Boolean, default: false },
  nativeType: {
    type: String as PropType<"button" | "submit" | "reset">,
    default: "button",
    validator: (v: string) => ["button", "submit", "reset"].includes(v),
  },
});
defineExpose({
  /** @description button html element */
  ref: _ref,
  // /** @description button size */
  // size: _size,
  /** @description button type */
  // type: props.type,
  /** @description button disabled */
  disabled: props.disabled,
});
</script>

<template>
  <button
    :type="nativeType"
    class="ease-in-out duration-200"
    :class="[
      `bg-${type}`,
      'border',
      size === 'large'
        ? 'text-sm px-5 py-3'
        : size === 'default'
        ? 'text-sm px-4 py-2'
        : size === 'default'
        ? 'text-xl px-3 py-1'
        : '',
      `border-${type}`,
      disabled ? 'cursor-not-allowed bg-opacity-70' : '',
      round ? 'rounded-full' : 'rounded-md',
      type === 'default'
        ? `text-default hover:bg-primary hover:bg-opacity-20 hover:text-primary hover:border-primary hover:border-opacity-20`
        : 'text-white hover:bg-opacity-70',
    ]"
    :aria-disabled="disabled || loading"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>
