import { View, Text, Image,ScrollView } from '@tarojs/components'
import { useLoad,useReachBottom } from '@tarojs/taro'
import Taro from '@tarojs/taro'

import { useState,useEffect } from 'react'
import './index.scss'
import more from "../../assets/more.png"
import cross from "../../assets/cross.png"
import logo from "../../assets/logo.webp"

export default function Index() {
  const mockData = [
    {
    title:'旅游',
    value:'tour',
    subData:[
      {
      title:'一日游',
      value:"daliyTour",
    },
    {
      
      title:'跟团游',
      value:"followTour",

    },
    {
      
      title:'自由行',
      value:"freeTour",

    
    }
    
      ] 
    },
    {
      title:'酒店',
      value:'hotel',
      subData:[
        {
        title:'快捷酒店',
        value:"quickHotel",
      },
      {
        
        title:'跟团游',
        value:"followTour",

      },
      {
        
        title:'自由行',
        value:"freeTour",

      
      }
      
        ] 
      }
]

  useLoad(() => {
    console.log('Page loaded.')
  
  })
  useReachBottom(()=>{console.log('usereachBottom')})
  const [toggle,setToggle] = useState(false)
  const [activeText,setActiveText] = useState('首页')
  const menus = [{name:'首页',value:'index'},{name:'关于',value:'home'}]
  useEffect(()=>{
    console.log(activeText)


  },[activeText])
  const toggleMenu = ()=>{
    setToggle(pre=>!pre)
  }
  const selectName = (item)=>{
    setActiveText(item.name)
    setToggle(false)
    if(item.name=="关于")
    Taro.navigateTo({
      url:'pages/home/index'
  })

  }
  const clickLeft = (item)=>{
    mockData.forEach(left=>{
      if(item.title==left.title){
        item.isSelected = !item.isSelected
      }
    })
  }

  return (
    <View className='index'>
     {!toggle&&<View className="header">
      <Image src={logo} style={{height:'32px'}}></Image>
      <View>
        <Text className="routeTitle">{activeText}</Text>
        <Image src={more} style={{width:'32px',height:'32px'}} className="icon" onClick={toggleMenu}></Image>
      </View>
      
     </View>}
     {toggle&&<>
      <View className='dropDown'>
        <Image src={cross} style={{width:'32px',height:'32px',marginRight:'-8px',marginBottom:'18px'}} className="icon" onClick={toggleMenu}></Image>
        {menus.map(item=>(<View onClick={()=>{selectName(item)}}>
          <Text className='routeTitle1'>{item.name}</Text>
        </View>))}
      </View>
      <View className='mask'></View>
     </>}
     <View className='container'>
      <ScrollView className='left'>
        {mockData.map(item=>(<View key={item.value} className="leftItem" onClick={()=>clickLeft(item)}>
          <Text>{item.title}</Text>
        </View>))}
      </ScrollView>

      </View> 
    </View>
  )
}
