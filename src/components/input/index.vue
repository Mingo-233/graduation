<template>
  <div class="material-input__component" :class="computedClasses">
    <div class="overh">
      <div class="my-input">
        <input v-if="type === 'password'" type="password" class="material-input" :name="name" :placeholder="placeholder" v-model="currentValue"
               :readonly="readonly" :disabled="disabled" :autoComplete="autoComplete" :max="max" :min="min" :required="required" @focus="handleMdFocus"
               @blur="handleMdBlur" @input="handleModelInput">
        <input v-if="type === 'text'" type="text" class="material-input" :name="name" :placeholder="placeholder" v-model="currentValue"
               :readonly="readonly" :disabled="disabled" :autoComplete="autoComplete" :max="max" :min="min" :required="required" @focus="handleMdFocus"
               @blur="handleMdBlur" @input="handleModelInput">
      </div>
    </div>
    <span class="focus-line"></span>
  </div>
</template>

<script>
export default {
  name: 'my-input',
  props: {
    icon: String,
    name: String,
    type: {
      type: String,
      default: 'text'
    },
    value: [String, Number],
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    min: String,
    max: String,
    step: String,
    minlength: Number,
    maxlength: Number,
    required: {
      type: Boolean,
      default: true
    },
    autoComplete: {
      type: String,
      default: 'off'
    },
    validateEvent: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      focusInLine: false,
      focusOutLine: false,
      currentValue: this.value,
      focus: false,
      fillPlaceHolder: null
    }
  },
  computed: {
    computedClasses() {
      return {
        'material--active': this.focus,
        'material--disabled': this.disabled,
        'material--raised': Boolean(this.focus || this.currentValue) // has value
      }
    }
  },
  watch: {
    value(newValue) {
      this.currentValue = newValue
    }
  },
  methods: {
    handleModelInput(event) {
      const value = event.target.value
      this.$emit('input', value)
      if (this.$parent.$options.componentName === 'ElFormItem') {
        if (this.validateEvent) {
          this.$parent.$emit('el.form.change', [value])
        }
      }
      this.$emit('change', value)
    },
    handleMdFocus(event) {
      this.focus = true
      this.$emit('focus', event)
      // if (this.placeholder && this.placeholder !== '') {
      //   this.fillPlaceHolder = this.placeholder
      // }
    },
    handleMdBlur(event) {
      this.focus = false
      this.$emit('blur', event)
      // this.fillPlaceHolder = null
      if (this.$parent.$options.componentName === 'ElFormItem') {
        if (this.validateEvent) {
          this.$parent.$emit('el.form.blur', [this.currentValue])
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
  .material-input__component{
    border-bottom:1px solid #dcdfe6;
  .my-input {
    width: 100%;
    padding-left: 20px;
    float: right;
    input{
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #666;
      height: 47px;
      &:-webkit-autofill {
        -webkit-text-fill-color: #666 !important;
        -webkit-box-shadow: 0 0 0px 1000px transparent  inset !important;
        background-color:transparent;
        background-image: none;
        transition: background-color 50000s ease-in-out 0s; //背景色透明  生效时长  过渡效果  启用时延迟的时间
      }
    }
  }
  .material-input{
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    width: 100%;
  &:focus {
     outline: none;
     border: none;
   }
  }
  }
</style>
