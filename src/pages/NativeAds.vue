<template>
  <div class="column justify-between">
    <h4 class="text-center">See our recommendations ⬇️</h4>

    <!-- <div class='column justify-evenly' >
      <div id='info'></div>
      <div id='image'></div>
    </div> -->

    <div id="amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb"></div>


    <!-- <div class="flex q-col-gutter-sm justify-around">
      <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:150px;height:250px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=powermatchapp-20&language=en_US&marketplace=amazon&region=US&placement=B0B2MLRF93&asins=B0B2MLRF93&linkId=35044091dd670db37b9a9c1c7e32acaa&show_border=true&link_opens_in_new_window=true"></iframe>

      <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:150px;height:250px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=powermatchapp-20&language=en_US&marketplace=amazon&region=US&placement=B0BQLHGLG4&asins=B0BQLHGLG4&linkId=c8811e83fb9199c98f205be5c5e5dcd6&show_border=true&link_opens_in_new_window=true"></iframe>

      <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:150px;height:250px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=powermatchapp-20&language=en_US&marketplace=amazon&region=US&placement=B07DBXZZN3&asins=B07DBXZZN3&linkId=2cb08c4950def4bdf41dbd940a5b9dc3&show_border=true&link_opens_in_new_window=true"></iframe>

      <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:150px;height:250px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=powermatchapp-20&language=en_US&marketplace=amazon&region=US&placement=B099F558S1&asins=B099F558S1&linkId=def6705e468a67f75cb1ccf2e38594b6&show_border=true&link_opens_in_new_window=true"></iframe>
    </div> -->
  </div>
</template>


<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NativeAds',
  name: 'Ads-Example',
})


</script>

<script setup>  
import { watchEffect, onMounted, nextTick, watch} from 'vue'
import postscribe from 'postscribe'

const props = defineProps({
  cellData:String
})



const cellName = props.cellData

watchEffect(() => {
  console.log(typeof(cellName))
  nextTick(() => {
  let codeApple = '9687a0fe-f6ba-4710-9bc5-7c3067df8aeb'
  let codeSamsung = '585fbb2c-bea9-4e35-b167-3d6025a582ec'
  let codeGeneral = ''
  if(cellName.includes('Apple')){
    codeGeneral = codeApple
    console.log('APPLE')
    } else {
    codeGeneral = codeSamsung
    console.log('SAMSUNG')
  }
  console.log('Inside Tick:',codeGeneral)
   postscribe('#amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb', `"<script defer async src='//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=${codeGeneral}'><\/script>"`)
})
})










</script>


