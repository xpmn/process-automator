<template>
  <div class="edit">
    <div class="row">
      <div class="col-md-8 col-xs-24">
        <at-input v-model="appLocal.name" placeholder="Name"></at-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 col-xs-24">
        <at-select  placeholder="Type">
          <at-option value="IFTTT">IFTTT</at-option>
          <at-option value="IFTTT2">IFTTT2</at-option>
        </at-select>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 col-xs-24">
        <at-input v-model="appLocal.trigger" placeholder="Trigger Name"></at-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 col-xs-24">
        <at-input v-model="appLocal.value1" placeholder="Value 1"></at-input>
      </div>
      <div class="col-md-8 col-xs-24">
        <at-input v-model="appLocal.value2" placeholder="Value 2"></at-input>
      </div>
      <div class="col-md-8 col-xs-24">
        <at-input v-model="appLocal.value3" placeholder="Value 3"></at-input>
      </div>
    </div>
    <div class="row">
      <at-button type="primary" v-if="create" @click="addApp()">Create</at-button>
      <at-button type="primary" v-if="!create" @click="deleteApp()">Delete</at-button>
      <at-button type="primary" v-if="!create" @click="updateApp()">Save</at-button>
    </div>

  </div>

</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  name: 'edit',
  props: {
    create: {
      type: Boolean,
      default: false,
      required: false
    },
    app: Object
  },
  methods: {
    addApp () {
      if (!this.create) return null
      this.$store.dispatch('addApp', this.appLocal)
      this.$emit('done:edit')
    },
    deleteApp () {
      if (this.create) return null
      this.$store.dispatch('deleteApp', this.appLocal)
      this.$emit('done:edit')
    },
    updateApp () {
      if (this.create) return null
      this.$store.dispatch('updateApp', this.appLocal)
      this.$emit('done:edit')
    }
  },
  data () {
    return {
      appLocal: this.app
    }
  }
}
</script>

<style scoped lang="scss">
.row {
  margin-bottom: 15px
}
.edit {
  margin-top: 10px;
  border: 1px dashed #eee;
  padding: 10px
}
</style>
