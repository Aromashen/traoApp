import { View, Text, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { useState } from 'react'
import './index.scss'
import more from "../../assets/more.png"
import bgImg from "../../assets/about/2.png"

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })
  const [toggle,setToggle] = useState(false)
  const menus = [{name:'首页',value:'home'},{name:'关于',value:'about'}]
  const toggleMenu = ()=>{
    setToggle(pre=>!pre)
  }

  return (
    <View className='index'>
     {!toggle&&<View className="header">
      <Text className="routeTitle">首页</Text>
      <Image src={more} style={{width:'12px',height:'12px'}} className="icon" onClick={toggleMenu}></Image>
     </View>}
     {toggle&&<View className='dropDown'>
        {menus.map(item=>(<View>
          <Text>{item.name}</Text>
        </View>))}
        </View>}
    </View>
  )
}
