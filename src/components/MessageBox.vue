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
    return <div class="wrap">
      <div class={this.classesBox}>
        <p domPropsInnerHTML={this.msg}></p>
      </div>
    </div>
  }
}
</script>

<style lang="stylus">
.message-box
  border-radius 6px
  margin 20px 0
  padding 20px

  &--default
    background #777
  &--error
    background #a77
  &--info
    background #bb0
  &--success
    background #7a7
</style>
