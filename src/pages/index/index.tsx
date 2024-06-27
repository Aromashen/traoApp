import { View, Text, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import more from "../../assets/more.png"

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
     <View className="header">
      <Text>首页</Text>
      <Image src={more} style={{width:'12px',height:'12px'}} className="icon"></Image>
     </View>
    </View>
  )
}
