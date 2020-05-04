import * as React from 'react'
import { View, Image, useWindowDimensions, Text, StyleSheet, ScrollView} from 'react-native'
import { Card, Divider, ListItem, Button } from 'react-native-elements'
import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'

import { Colors } from '../core/Colors'
import Raiting from '../components/Rating'
import {supplerSentencePrice, supplerSentencePriceType,isEmptyObject} from './../core/data'
import SupplerCard from '../components/SupplerCard'

const OrderScreen: React.FC<any> = (props) => {
  const {width, height} = useWindowDimensions()
  const [item, setItem] = React.useState<supplerSentencePriceType | any>()
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
          size={18}
          color={Colors.icongrey} 
          onPress ={()=> setProductView('grid')}
        /> :
        <Fontisto
          name = 'nav-icon-list-a'
          size={18}
          color={Colors.icongrey} 
          onPress ={()=> setProductView('list')}
        />
      ),
    })
  }, [props.navigation, product, productView])


  React.useEffect(()=>{
    if (isEmptyObject(item)) {
      const obj = supplerSentencePrice.find((i:supplerSentencePriceType) => i.id  === props.route.params.PriceId)
      setItem(obj)
    }
  }, [props.route.params.PriceId])

  return (
    <>
    {
      item === undefined ? <></> :
      <ScrollView style={{position:'absolute'}}>
        <SupplerCard 
          supplerdata ={props.route.params.supplerdata}
        />
      <Text style = {styled.header}>Описание прайса</Text>
      <Card key = {item.id} containerStyle = {{...styled.container,  width:width}}>
        <View style ={{...styled.gridContainer, width:width }}>
          <Image
            source={ item.image.big } 
            style={{ width: width, height: 300 }}
          />
        </View>
        <Divider style = {{ width: width-30,height: 0.7}} />
     <ListItem 
      leftElement={<View/>}
      rightElement ={
        <Image
          source={ require('./../assets/basket.png') }
          style={{ width: 55, height: 55, marginBottom: 12 }}
        />
      }
      title={item.name}
      titleStyle = { styled.nameText}
      subtitle={
        <View>
          <Text style ={styled.costText}>
            {item.cost} ₽
          </Text>
          <Text style = {styled.preoderedQuantityText}>
            Ранее заказано: {item.preoderedQuantity}
          </Text>
        </View>
      }
    />
    <Divider />
    <View style ={styled.footer}>
      <Text style = {styled.preoderedQuantityText}>
        Арт. / Код: {item.id}
      </Text>
      <View style = {styled.instockContainer}>
        <Text style = {styled.preoderedQuantityText}>
          Вналичии: 
        </Text>
        <Raiting 
          instock = {item.instock}
        />              
      </View>
    </View>
  </Card>
  </ScrollView>
    }
  <View style = {{...StyleSheet.absoluteFillObject, top:height-241}}>
    <View style = {{flexDirection:"row",}}>
    <Text style ={{width:width/2, textAlign:'center', alignSelf:'center',fontSize:27,fontWeight:'800'}} >130 000 ₽</Text>

    <Button 
      buttonStyle = {{backgroundColor: Colors.sunshine,height:62}}
      containerStyle ={{width:width/2,margin:0, padding: 0}}
      title="Оформить заказ"
      />
      </View>
  </View>
    
    </>
  )
};
const styled = StyleSheet.create({
  container:{
    margin:0,
    marginBottom: 0,
    shadowOffset:{width: 5, height: 5},
    shadowColor: Colors.shadow,
    shadowOpacity: 5,
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft : 10,
    paddingRight : 10
  }, 
   header:{
    margin: 18,
    marginTop: 15,
    marginBottom: 50,
    fontWeight:'400',
    fontSize:19,
    lineHeight:24,
    color:Colors.textblack
  },
  gridContainer:{
    flexDirection: 'row', 
    justifyContent:'center',
    height:300
  },
  instockContainer:{
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center'
  },
  footer:{ 
    flexDirection: "row", 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding:14
  },
  nameText:{
    color: Colors.textblack ,
    fontWeight:'400',
    fontSize:22,
  },
  costText:{
    fontSize:22,
    fontWeight:'700',
    color:Colors.textblack,
    lineHeight: 30  ,
  },
  preoderedQuantityText:{
    color: Colors.icongrey,
    fontSize: 19,
    marginRight: 5,
    fontWeight:'400'
  },
  createorder:{
    position: 'absolute'
  }
})
export default OrderScreen
