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
import postscribe from 'postscribe'

let codeApple = '9687a0fe-f6ba-4710-9bc5-7c3067df8aeb'
let codeSamsung = '585fbb2c-bea9-4e35-b167-3d6025a582ec'

export default defineComponent({
  name: 'NativeAds',
  name: 'Ads-Example',
  mounted: function () {
    postscribe('#amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb', `"<script defer async src='//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=${codeSamsung}'><\/script>"`)
    /*postscribe(`#${idGalaxy}`, `${codeGalaxy}`)*/
    /*postscribe('#info', `<script type="text/javascript">
                                  amzn_assoc_placement = "adunit0";
                                  amzn_assoc_search_bar = "false";
                                  amzn_assoc_tracking_id = "powermatchapp-20";
                                  amzn_assoc_ad_mode = "manual";
                                  amzn_assoc_ad_type = "smart";
                                  amzn_assoc_marketplace = "amazon";
                                  amzn_assoc_region = "US";
                                  amzn_assoc_title = "Anker Chargers";
                                  amzn_assoc_linkid = "8001da9aea89ecf828f67003b97066cd";
                                  amzn_assoc_asins = "B099F2H5KH,B09C5RG6KV,B0B466YTT3,B0B2MM1W65";
                          <\/script>`)
    postscribe('#image', `<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"><\/script>`)*/
  }

})

</script>

<script setup>  
import { ref, inject, watchEffect} from 'vue'

const props = defineProps({
  cellData:String
})

watchEffect(() => {
  console.log(props.cellData)
})


/*import { useMeta } from 'quasar'
const metaData = {
  script: {
    amazon: {
      src: '//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=53df6291-f3a8-41ed-87ee-ecc87faf9f39',
      async: true
    }
  }
}
useMeta(metaData)*/


</script>


