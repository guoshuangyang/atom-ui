<script lang="ts">
export default {
  name: "AtomButton",
};
</script>
<script lang="ts" setup>
import { ref, PropType } from "vue";
import { validatorSize } from "../../utils/validator";
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
  size: { type: String, default: "default", validator: validatorSize },
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
      type === 'default' ? `bg-white text-${type}` : `bg-${type} text-white`,
      'border',
      plain
        ? `border-${type} bg-opacity-0 text-${type} border-0`
        : 'border-${type}',
      // loading
      loading ? 'loading' : '',
      // 大小内边距
      size === 'large'
        ? 'text-sm px-4 py-2'
        : size === 'default'
        ? 'text-sm px-3 py-1.5'
        : size === 'small'
        ? 'text-xs px-2.5 py-1'
        : '',
      // 禁用状态
      disabled ? 'cursor-not-allowed hover:bg-opacity-70' : '',
      // 圆角
      round ? 'rounded-full' : 'rounded-md',
      // hover:
      plain ? '!bg-white hover:bg-opacity-0' : '',
      // type === 'default'
      //   ? `hover:bg-primary hover:bg-opacity-20 hover:text-primary hover:border-primary hover:border-opacity-20`
      //   : '',
    ]"
    :aria-disabled="disabled || loading"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <div class="flex items-center">
      <svg
        v-show="loading"
        :class="size === 'small' ? 'mr-1' : 'mr-2'"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="1.2em"
        height="1.2em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
          opacity=".5"
        />
        <path
          fill="currentColor"
          d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"
        >
          <animateTransform
            attributeName="transform"
            dur="1s"
            from="0 12 12"
            repeatCount="indefinite"
            to="360 12 12"
            type="rotate"
          />
        </path>
      </svg>
      <span v-if="$slots.default">
        <slot />
      </span>
    </div>
  </button>
</template>
