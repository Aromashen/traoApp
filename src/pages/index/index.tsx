import { View, Text, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import Taro from '@tarojs/taro'

import { useState } from 'react'
import './index.scss'
import more from "../../assets/more.png"
import cross from "../../assets/cross.png"

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
    console.log(Taro.getSystemInfo())
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
      <Image src={more} style={{width:'18px',height:'18px'}} className="icon" onClick={toggleMenu}></Image>
     </View>}
     {toggle&&<>
      <View className='dropDown'>
        <Image src={cross} style={{width:'18px',height:'18px'}} className="icon" onClick={toggleMenu}></Image>
        {menus.map(item=>(<View >
          <Text className='routeTitle1'>{item.name}</Text>
        </View>))}
      </View>
      <View className='mask'></View>
     </>
     
        } 
    </View>
  )
}
