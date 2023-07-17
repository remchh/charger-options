<template>
  <div class="column justify-between">
    <h4 class="text-center">See our recommendations ⬇️</h4>

    <!-- <div class='column justify-evenly' >
      <div id='info'></div>
      <div id='image'></div>
    </div> -->

    <div class="flex flex-center q-gutter-md" id="amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb"></div>

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
import { watchEffect, nextTick, ref, inject } from 'vue'
import postscribe from 'postscribe'

//Receiving props from IndexPage
const props = defineProps({
  cellData:String
})


/*const emitter = inject('emitter')
emitter.on('pass-name', (name) => {
  console.log(name)
})*/


/*nextTick(() => {
  console.log(props.cellData)
  console.log(typeof(props.cellData))
  let codeApple = ref('9687a0fe-f6ba-4710-9bc5-7c3067df8aeb')
  let codeSamsung = ref('585fbb2c-bea9-4e35-b167-3d6025a582ec')
  let codeGoogle = ref('f9ac7c8d-a57a-400f-8cc2-37dd08e3f2c9')
  let codeXiaomi = ref('7551389b-28b8-431b-87fb-b4d501982dd8')
  let codeOthers = ref('dfeca202-d71b-4df6-8eb3-9f167f7a3618')
  let codeGeneral = ref('')
  if(props.cellData.includes('Apple')){
    codeGeneral.value = codeApple.value
    console.log('APPLE')
    } else if (props.cellData.includes('Samsung')){
    codeGeneral.value = codeSamsung.value
    console.log('SAMSUNG')
  } else if (props.cellData.includes('Pixel')){
    codeGeneral.value = codeGoogle.value
    console.log('GOOGLE')
  } else if (props.cellData.includes('Xiaomi')){
    codeGeneral.value = codeXiaomi.value
    console.log('XIAOMI')
  } else {
    codeGeneral.value = codeOthers.value
    console.log('Others')
  }
  
  console.log('Inside Tick:',codeGeneral.value)
  postscribe('#amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb', `"<script defer async src='//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=${codeGeneral.value}'><\/script>"`)
})*/

nextTick(() => {
  if(props.cellData.includes('Apple')){
    console.log('APPLE')
    postscribe('#amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb', `"<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=powermatchapp-20&language=en_US&marketplace=amazon&region=US&placement=B0BQN2Z54D&asins=B0BQN2Z54D&linkId=d17133b5baf2be5bec12074cbb5fe0fa&show_border=true&link_opens_in_new_window=true"></iframe>"`)
    postscribe('#amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb', `"<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=powermatchapp-20&language=en_US&marketplace=amazon&region=US&placement=B07DBXZZN3&asins=B07DBXZZN3&linkId=dd1be53b1e9a19bf6f529326fec03af9&show_border=true&link_opens_in_new_window=true"></iframe>"`)
    postscribe('#amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb', `"<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=powermatchapp-20&language=en_US&marketplace=amazon&region=US&placement=B099F2H5KH&asins=B099F2H5KH&linkId=177a4345630c2a8fa42785a8b9d6f7d0&show_border=true&link_opens_in_new_window=true"></iframe>"`)
    postscribe('#amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb', `"<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=powermatchapp-20&language=en_US&marketplace=amazon&region=US&placement=B08K7GHZ3V&asins=B08K7GHZ3V&linkId=49a90c4207956c9b61207fe2c58ec15f&show_border=true&link_opens_in_new_window=true"></iframe>"`)

  } else if (props.cellData.includes('Samsung')){
    console.log('SAMSUNG')
    postscribe('#amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb', `"<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=powermatchapp-20&language=en_US&marketplace=amazon&region=US&placement=B0BPC67DLC&asins=B0BPC67DLC&linkId=ff6ed0574340323deb085b27ae4b2d46&show_border=true&link_opens_in_new_window=true"></iframe>"`)
    postscribe('#amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb', `"<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=powermatchapp-20&language=en_US&marketplace=amazon&region=US&placement=B083BJTY2T&asins=B083BJTY2T&linkId=717cde072608c0ac5c03555d5e6e61c5&show_border=true&link_opens_in_new_window=true"></iframe>"`)
    postscribe('#amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb', `"<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=powermatchapp-20&language=en_US&marketplace=amazon&region=US&placement=B0BQLHGLG4&asins=B0BQLHGLG4&linkId=d8eabb881d34489279a339a8efead279&show_border=true&link_opens_in_new_window=true"></iframe>"`)
    postscribe('#amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb', `"<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=powermatchapp-20&language=en_US&marketplace=amazon&region=US&placement=B08K7GHZ3V&asins=B08K7GHZ3V&linkId=49a90c4207956c9b61207fe2c58ec15f&show_border=true&link_opens_in_new_window=true"></iframe>"`)

  } else if (props.cellData.includes('Pixel')){
    console.log('GOOGLE')
    postscribe('#amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb', `"<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=powermatchapp-20&language=en_US&marketplace=amazon&region=US&placement=B0BWHKBNJR&asins=B0BWHKBNJR&linkId=852bb5540c04d4585ca422657eb88fd9&show_border=true&link_opens_in_new_window=true"></iframe>"`)
    postscribe('#amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb', `"<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=powermatchapp-20&language=en_US&marketplace=amazon&region=US&placement=B0B2MM1W65&asins=B0B2MM1W65&linkId=41db84d1641b0cb19771e694282d96ed&show_border=true&link_opens_in_new_window=true"></iframe>"`)
    postscribe('#amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb', `"<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=powermatchapp-20&language=en_US&marketplace=amazon&region=US&placement=B0BPC67DLC&asins=B0BPC67DLC&linkId=ff6ed0574340323deb085b27ae4b2d46&show_border=true&link_opens_in_new_window=true"></iframe>"`)
    postscribe('#amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb', `"<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=powermatchapp-20&language=en_US&marketplace=amazon&region=US&placement=B08K7GHZ3V&asins=B08K7GHZ3V&linkId=49a90c4207956c9b61207fe2c58ec15f&show_border=true&link_opens_in_new_window=true"></iframe>"`)
  }
  else {
    console.log('Others')
    postscribe('#amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb', `"<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=powermatchapp-20&language=en_US&marketplace=amazon&region=US&placement=B0BQLHGLG4&asins=B0BQLHGLG4&linkId=38178a78c5aacf0ff18ce8c5611985d1&show_border=true&link_opens_in_new_window=true"></iframe>"`)
    postscribe('#amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb', `"<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=powermatchapp-20&language=en_US&marketplace=amazon&region=US&placement=B0843SCLYH&asins=B0843SCLYH&linkId=66d917b6e29a1803e6e9438eaf70319a&show_border=true&link_opens_in_new_window=true"></iframe>"`)
    postscribe('#amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb', `"<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=powermatchapp-20&language=en_US&marketplace=amazon&region=US&placement=B08VDJP7WN&asins=B08VDJP7WN&linkId=d1707c56565ca0b51fb9b5b0741fc6f3&show_border=true&link_opens_in_new_window=true"></iframe>"`)
    postscribe('#amzn-assoc-ad-9687a0fe-f6ba-4710-9bc5-7c3067df8aeb', `"<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=powermatchapp-20&language=en_US&marketplace=amazon&region=US&placement=B0BPC67DLC&asins=B0BPC67DLC&linkId=ff6ed0574340323deb085b27ae4b2d46&show_border=true&link_opens_in_new_window=true"></iframe>"`)

  } 
  

})



</script>

