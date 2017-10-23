<template>
<div>
  <div class="row">
    <div class="col-md-8 col-xs-24">
      <at-input v-model="iftttLink" placeholder="IFTTT Link">
        <template slot="prepend">
          <i class="icon icon-link"></i>
        </template>
      </at-input>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      iftttLink: ''
    }
  }
}
</script>

<style lang="scss"></style>
