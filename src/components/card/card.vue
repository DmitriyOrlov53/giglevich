<template>
    <div data-scrollbar class="card" v-bind:style="{width: width_of_card(),left: left(), top: top()}">
      <div class="card__text">
        <headline position="left" size="36px" h="1">
          <template v-slot:second>{{rendering.header}}</template>
        </headline>
        <paragraph><b>Район:</b> {{rendering.district}}</paragraph>
        <paragraph><b>Статус:</b> {{rendering.status}}</paragraph>
        <paragraph v-if="rendering.adress"><b>Адрес:</b> {{rendering.adress}}</paragraph>
      </div>
      <card__photo v-bind:photo="rendering.photo"></card__photo>
      <close-button object="render_card"></close-button>
    </div>
</template>

<style lang="sass" scoped>
.card
    position: absolute
    z-index: 2
    background-color: #ffffffee
    max-height: 500px
    overflow-x: hidden
    overflow-y: auto
    transition-property: top, left
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55)
    transition-duration: .5s
.card__text
  padding-left: 20px
</style>

<script>
  var width_of_map = window.innerWidth
  var height_of_map = Math.round(650*width_of_map/536)

  import card__photo from './card__photo.vue'

  import store from '../../store.js'
  import Scrollbar from 'smooth-scrollbar'
  export default {
    components: {
        'card__photo': card__photo
    },
    props: ['position', 'rendering'],
    mounted(){
      Scrollbar.initAll({alwaysShowTracks: true});
    },
    methods: {
      left: function(){
        var width = +this.width_of_card().substring(0, 3);
        if(width >= (width_of_map - (this.position.x + 5 * width_of_map / 536))){
          return ((this.position.x - 5 * width_of_map / 536) - width) + 'px';
        }
        else return (this.position.x + 5 * width_of_map / 536) + 'px';
      },
      top: function(){
      return (this.position.y + 5 * height_of_map / 650) + 'px';
    },
    width_of_card: function(){
      if(width_of_map > 1700){
         return '800px';
       }
       else{
         return '500px'
       }
    }
  }
}
</script>