import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { Swiper,SwiperItem,Image } from '@antmjs/vantui'
import react from 'react'


export default function Index() {
  const images = [
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-5.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-6.jpeg',
  ]
  const [initPage1] = react.useState(0)
  const [height] = react.useState(200)

  useLoad(() => {
    console.log('Page loaded.')
  })
  const clickToDetail = ()=>{
    console.log('detail')
  }

  return (
    <View className='index'>
      <Swiper
        height={height}
        paginationColor="#426543"
        autoPlay="3000"
        initPage={initPage1}
        paginationVisible
        touchable
        style={{ borderRadius: 12 }}
      >
        {images.map((item, index) => (
          <SwiperItem key={`swiper#demo1${index}`}>
            <Image src={item} fit="cover" width="100%" height={`${height}px`} onClick={clickToDetail}/>
          </SwiperItem>
        ))}
      </Swiper>

    </View>
  )
}