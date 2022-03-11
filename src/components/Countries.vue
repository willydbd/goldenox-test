<template>
  <div class="container">
      <form action="">
        <div class="row">
          <div class="form-group col-sm-9 ">
            <input v-model="search" @keyup.prevent="searchCountry()" class="form-control" type="text" placeholder="Search for a country" name="search" style="background: #212c38; letter-spacing:1px;"/>
          </div>
        <div class="form-group col-sm-3 justify-content-end">
        <select @change="filterRegion()" v-model="region" class="form-control" style="margin-right: 0px !important; background: #212c38; color: #ffffffdc; letter-spacing:1px; font-size: 13px;">
        <option selected>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
        </div>
        </div>
      </form>
    
    <div class="row row-cols-1 row-cols-md-4 g-5 mt-5 ">
  <div 
  v-for="country in countries" 
    :key="country.name.common"
    :country ="country"
   class="col" style="max-width: 250px; max-heigh: 170px;">
    <router-link :to="'/country/' + country.name.common " :title="country.name.common" style="text-decoration: none; color: #ffffffd2; font-size: 14px; ">
      <div class="card deck" >
      <img height="120px" :src="country.flags.png" class="card-img-top" alt="...">
      <div class="card-body ">
        <h5 class="card-title ">{{ country.name.common}}</h5>
        <p class="card-text ">Population: <span class="text-muted"> {{ country.population}}</span></p>
        <p class="card-text">Region: <span class="text-muted">{{ country.region}}</span></p>
        <p class="card-text" >Capital: <span class="text-muted" v-for="(cap, key) in country.capital" :key="key">{{cap}} <small v-if="key < country.capital.length && key > 0">,</small></span></p>
      </div>
      
    </div>
    </router-link>
  </div>
</div>    
  </div>
</template>

<script>
import axios from 'axios'

export default {
 

  name: 'countries',
  props: {
    // countries: Array
  },
  data(){
    return {
      region:'',
      search: '',
      countries: [],
    }
  },
  methods:{
    // search handler
  async searchCountry(){
      try {
      const res = await axios.get('https://restcountries.com/v3.1/name/' + this.search )
      this.countries = res.data
      } catch (err) {
        console.log(err)
      }
    },
    // simulate http request
    async getCountries(){
      try {
      const res = await axios.get('https://restcountries.com/v3.1/all')
      this.countries = res.data
      } catch (err) {
        console.log(err)
      }
  
    },
    // filter countries by region method handler
   async filterRegion(){
      try {
      const res = await axios.get('https://restcountries.com/v3/region/' + this.region)
      this.countries = res.data
      } catch (err) {
        console.log(err)
      }
    },
  

  },
  async created() {
    // make http request on created hook method
    await this.getCountries()
  }
}
</script>
<style scoped>

</style>
