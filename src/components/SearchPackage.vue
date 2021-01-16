<template>
  <b-container class="bv-example-row pt-5">
    <b-row>
      <b-col md="4">
        <b-form-input
            class="search-input"
            v-model="key"
            placeholder="Search package"
            v-on:keyup="searchPackage"
        ></b-form-input>
      </b-col>
    </b-row>


    <div class="table-responsive package">
      <table class="table table-package">
        <tbody>
        <tr
            v-for="(packageItem, index) in packages"
            :key="index"
            v-on:click="aboutPackage(index)"
            v-b-modal.aboutPackage
        >
          <td>{{packageItem.package.name}}</td>
          <td>{{packageItem.package.version}}</td>
        </tr>
        </tbody>
      </table>
    </div>


    <b-pagination
        class="pagination-package"
        v-model="currentPage"
        :total-rows="this.totalSize"
        :per-page="10"
        first-number
        last-number
        aria-controls="my-table"
        @change="onPageChange"
    ></b-pagination>


    <b-modal id="aboutPackage" title="About Package">
      <div v-if="getPackageItem">
        <p>{{ packages[this.indexPackage].package.name }}</p>
        <p>{{ packages[this.indexPackage].package.version }}</p>
        <p>{{ packages[this.indexPackage].package.description }}</p>
        <a
            :href="packages[this.indexPackage].package.links.npm"
            target="_blank">
          {{ packages[this.indexPackage].package.links.npm }}
        </a>
      </div>
    </b-modal>

  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SearchPackage',
  data() {
    return {
      key: '',
      indexPackage: 0,
      currentPage: 1,
      getPackageItem: false
    }
  },

  computed: {
    ...mapGetters({
      packages: 'getPackageList',
      totalSize: 'getTotalSize',
    }),

  },

  methods: {
    ...mapActions([
      'fetchPackages',
    ]),

    searchPackage(){
      const payload = {
        packageName: this.key,
      }
      this.fetchPackages(payload)
    },

    onPageChange(pageNumber){
      const payload = {
        packageName: this.key,
        from: (pageNumber -1)*10
      }
      this.fetchPackages(payload)
    },

    aboutPackage(index){
      this.getPackageItem = true
      this.indexPackage = index
    }

  },


}
</script>


<style lang="scss" scoped>
@import '../scss/main';
</style>
