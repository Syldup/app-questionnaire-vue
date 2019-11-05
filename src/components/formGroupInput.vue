<template>
  <div
    class="form-group"
    :class="[
      { 'input-group': hasIcon },
      { 'input-group-focus': focused },
      { 'has-label': label || $slots.label }
    ]"
  >
    <slot name="label">
      <label v-if="label" class="control-label" :class="labelClasses">
        {{ label }}
        <span v-if="required">*</span>
      </label>
    </slot>

    <div :class="[{ 'input-group': hasIcon }]">
      <slot name="addonIcon">
        <div v-if="addonIcon" class="input-group-prepend">
          <i class="input-group-text" :class="addonIcon"></i>
        </div>
      </slot>
      <slot>
        <input
          :type="type"
          :value="value"
          v-on="listeners"
          v-bind="$attrs"
          class="form-control"
          :class="[{ valid: value }, inputClasses]"
        />
      </slot>
      <slot name="infoBlock"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fg-input',
  props: {
    required: Boolean,
    label: String,
    labelClasses: String,
    inputClasses: String,
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    addonIcon: String
  },
  data () {
    return {
      focused: false
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: this.updateValue,
        focus: this.onFocus,
        blur: this.onBlur
      }
    },
    hasIcon () {
      const { addonLeft } = this.$slots
      return (addonLeft !== undefined || this.addonIcon !== undefined)
    }
  },
  methods: {
    updateValue (evt) {
      let value = evt.target.value
      this.$emit('input', value)
    },
    onFocus (value) {
      this.focused = true
      this.$emit('focus', value)
    },
    onBlur (value) {
      this.focused = false
      this.$emit('blur', value)
    }
  }
}
</script>

<style type="text/css">
  .form-group .input-group-text {
    background-color: transparent;
    border: none;
    color: #fffd;
    margin-left: -12px;
    font-size: .9em
  }
  .form-group .form-control {
    background-color: transparent;
    color: #fffd;
    box-shadow: none;
    border-radius: 30px;
    border: none;
    height: 44px;
    font-size: .9em
  }
  .form-group .form-control::placeholder {
    color: #fffd;
    font-size: .9em;
    opacity: 1;
  }

  .form-group {
    background-color: #0006;
    border-radius: 30px;
    color: hsla(0,0%,100%,.8);
    transition-duration: 1s;
  }
  .input-group-focus {
    background-color: #000a;
    color: #fff;
    transition-duration: 1s;
  }
</style>
