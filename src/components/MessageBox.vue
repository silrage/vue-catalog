<script>

export default {
  props: {
    msg: {
      type: String,
      default: 'Some text here...'
    },
    level: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    classesBox() {
      return [
        'message-box',
        `message-box--${this.level}`
      ]
    }
  },
  render() {
    return <div class={this.classesBox}>
      <p domPropsInnerHTML={this.msg}></p>
    </div>
  }
}
</script>

<style lang="stylus">
.message-box
  border-radius 6px
  margin $spaceX2 0
  padding $spaceX2

  &--default
    background #777
  &--error
    background $color-error
  &--info
    background $color-info
    color #fff
  &--success
    background $color-success
</style>
