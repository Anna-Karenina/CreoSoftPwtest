import * as React from 'react'
import { Text, ScrollView, StyleSheet  } from 'react-native'

import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'

import SupplerSentencePriceDetals from '../components/supplerSentencePriceDetals'
import SupplerCard  from './../components/SupplerCard'
import { Colors } from '../core/Colors'



const PriceSentenceScreen = (props:any) => {
  const [productView, setProductView]  = React.useState('list')
  const [product] = React.useState(props.route.params.supplerdata.product)

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      title: product === '' ? 'No title' : product,
      headerLeftContainerStyle:{marginLeft: 18},
      headerLeft: () => (
        <MaterialCommunityIcons 
          style={{
            transform:[{ rotateY: "180deg" }]
          }} 
          name="redo-variant" 
          onPress={()=>{props.navigation.goBack()}}
          color={Colors.icongrey} 
          size={30} />
      ),
      headerRight:()=>(
       productView === 'list' ? 
        <Fontisto
          name = 'nav-icon-grid-a'
          size={25}
          color={Colors.icongrey} 
          onPress ={()=> setProductView('grid')}
        /> :
        <Fontisto
          name = 'nav-icon-list-a'
          size={25}
          color={Colors.icongrey} 
          onPress ={()=> setProductView('list')}
        />
      ),
    })
  }, [props.navigation, product, productView])
  
  return (
    <ScrollView style={StyleSheet.absoluteFill }>
          <SupplerCard 
            key= {props.route.params.supplerdata.id}
            id={props.route.params.supplerdata.id} 
            logo={props.route.params.supplerdata.logo} 
            name={props.route.params.supplerdata.name} 
            product={props.route.params.supplerdata.product} 
            priceupload = {props.route.params.supplerdata.priceupload} 
            badgecount={props.route.params.supplerdata.badgecount}
          />
      <Text style = {styled.header}>Описание прайса</Text>
      <SupplerSentencePriceDetals 
        productView = {productView}
        supplerdata = {props.supplerdata}/>
    </ScrollView>
  )
}

const styled = StyleSheet.create({
  header:{
    margin: 18,
    marginTop: 5,
    marginBottom: 44,
    fontWeight:'400',
    fontSize:18,
    lineHeight:24,
    color:Colors.textblack
  }
})
export default PriceSentenceScreen