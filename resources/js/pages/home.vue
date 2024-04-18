<template>
  <div class="row">
    <div class="col-lg-10 m-auto">
      <card title="Notes">

        <button class="btn btn-primary" @click="tab = 1">Notes</button>
        <button class="btn btn-secondary" @click="tab = 2">Shipment</button>
        <Notes v-if="tab == 1" class="mb-3"/>
        <ShipmentComponents v-if="tab == 2"/>
      </card>
    </div>
  </div>
</template>

<script>
import Notes from "../components/Notes.vue";
import ShipmentComponents from "../components/ShipmentComponents.vue";
// import axios from 'axios'
export default {
  data() {
    return {
      tab: 1,
    }
  },
  middleware: 'auth',

  // async asyncData () {
  //   const { data: projects } = await axios.get('/api/projects')

  //   return {
  //     projects
  //   }
  // },
  components:{
    ShipmentComponents,
    Notes
  },
  metaInfo () {
    return { title: this.$t('home') }
  },


}
</script>
