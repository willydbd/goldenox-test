<template>
  <div class="container">
    <div class="row mb-5 col-md-6">
       <a style="color: #ffffffdc; max-width: 120px; font-size: 11px; letter-spacing:1px; " @click="back()" class="back btn btn-default">Back</a>
    </div>
    <div class="row"  v-for="count in country" :key="count.name.common">
      <div class="country-image col-md-4" >
        <div class="image-container">
          <img :src="count.flags.png" alt="">
        </div> 
      </div>
      <div class="country-info col-md-8 mt-3">
        
        <div class="row">
          <div class="col-6"> 
            <ul style="list-style:none; color: #cacaca;">
            <li class="country-name row"><span><h5>{{ count.name.common}}</h5></span></li> <br>
            <li><span>Native Name <span class="text-muted" v-for="(native, key) in count.name.nativeName" :key="key">{{ native.common }} <small v-if="key < count.name.nativeName.length && key > 0">,</small></span></span></li>
            <li><span>Population: <span class="text-muted"> {{count.population }}</span></span></li>
            <li><span>Region: <span class="text-muted"> {{count.region }}</span></span></li>
            <li><span>Sub Region: <span class="text-muted"> {{count.subregion }}</span></span></li>
          </ul>
          </div>
          <div class="col-6">
            <ul style="list-style:none; color: #cacaca;">
              <li></li><br> <br>
            <li><span>Currencies: <span class="text-muted" v-for="(currency, key) in count.currencies" :key="currency"> {{ currency.name }}<small v-if="key < count.currencies.length && key > 0">,</small></span></span></li>
            <li><span>Languages: <span class="text-muted" v-for="(language, key) in count.languages" :key="language"> {{ language }}<small v-if="key < count.languages.length && key > 0">,</small></span></span></li>
            <li><span>Capital: <span class="text-muted" v-for="(cap, key) in count.capital" :key="cap"> {{ cap }}<small v-if="key < count.capital.length && key > 0">,</small></span></span></li>

          </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <ul style="list-style:none; color: #cacaca;">
            <li><span>Border Countries<span v-for="border in count.borders" :key="border"> <a style="margin-left: 3px; color: #ffffffdc; max-width: 80px; font-size: 11px; letter-spacing:1px;" class="back btn btn-default">{{ border }} </a> </span></span></li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  // name: 'Country',
  data(){
    return{
      name: this.$route.params.name,
      country: []
    }
  },
  methods:{
    back(){
      window.history.back()
    },
    async getCountry(){
      try {
      const res = await axios.get('https://restcountries.com/v3.1/name/' + this.name )
      this.country = res.data
      } catch (err) {
        console.log(err)
      }
    }
  },
  async created(){
    await this.getCountry()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.country-image{
   max-height: 600px;
   max-height: 600px;
}
</style>
