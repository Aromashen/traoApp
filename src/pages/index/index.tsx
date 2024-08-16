import { View, Text, Image,ScrollView } from '@tarojs/components'
import { useLoad,useReachBottom } from '@tarojs/taro'
import Taro from '@tarojs/taro'

import { useState,useEffect,useRef } from 'react'
import './index.scss'
import more from "../../assets/more.png"
import cross from "../../assets/cross.png"
import logo from "../../assets/logo.webp"

export default function Index() {
  const right = useRef(null)
  const mockData = [
    {
    title:'旅游',
    value:'tour',
    isSelected:false,
    subData:[
      {
      title:'一日游',
      value:"daliyTour",
      isSelected:false,
    },
    {
      
      title:'跟团游',
      value:"followTour",
      isSelected:false,
    },
    {
      
      title:'自由行',
      value:"freeTour",
      isSelected:false,
    }
      ] 
    },
    {
      title:'酒店',
      value:'hotel',
      isSelected:false,
      subData:[
        {
        title:'快捷酒店',
        value:"quickHotel",
        isSelected:false,
      },
      {
        title:'跟团游',
        value:"followTour",
        isSelected:false,
      },
      { 
        title:'自由行',
        value:"freeTour",
        isSelected:false,
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
    console.log('title',item.title)

    mockData.forEach(left=>{
      if(item.title==left.title){
        item.isSelected = !item.isSelected
      }
    })
  }
  const scrollRight = ()=>{
    console.log('scroll',right.current)
  }
  const test = (subItem)=>{
    console.log('subItem',subItem)
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
        {mockData.map(item=>(<View key={item.value} onClick={()=>clickLeft(item)} className={["leftItem",item.isSelected?'active':'normal'].join(' ')}>
          <Text>{item.title}</Text>
        </View>))}
      </ScrollView>
      <ScrollView className="right" onScroll={scrollRight} ref={right}>
        {mockData.map(item=>(<View>
          <Text className={item.isSelected?'activeTitle':'normalTitle'}>{item.title}</Text>
          <View className="subContainer">
            {item.subData.map(subItem=>(<View className="sub" onClick={()=>test(subItem)}>
              <Text>{subItem.title}</Text>
              
            </View>))}
          </View>
        </View>))}
      </ScrollView>

      </View> 
    </View>
  )
}
