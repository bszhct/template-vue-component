<template>
  <div :class="['layout-card-wrap', className]">
    <div v-if="title" class="title">{{title}}</div>
    <div v-if="description" class="description">{{description}}</div>
    <div class="card-main"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'layout-card',
  props: {
    className: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.layout-card-wrap
  margin 0
  padding 30px 16px 16px
  box-shadow 2px 5px 10px rgba(0, 0, 0, 0.1)
  .title
    color rgba(0, 0, 0, 0.85)
    font-size 18px
    padding-bottom 8px
  .description
    color #5e6d82
    padding-bottom 8px
  .card-main
    padding 16px
    margin-bottom 20px
</style>
