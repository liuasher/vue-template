<template>
  <div class="hello">
    <p>
      {{$t('guide')}} <br>
      {{$t('checkHere')}}
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">{{$t('doc')}}</a>.
    </p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: {
        type: String,
        default: ''
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
