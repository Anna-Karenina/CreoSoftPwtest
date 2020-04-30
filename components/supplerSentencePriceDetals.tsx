import * as React from 'react'
import { Card, Image,ListItem, Divider } from 'react-native-elements'
import { View, Text, useWindowDimensions, StyleSheet } from 'react-native'

import {supplerSentencePrice, supplerSentencePriceType} from './../core/data'
import Raiting from './Rating'
import { Colors } from '../core/Colors'


const SupplerSentencePriceDetals:React.FC<any> = (props) => {
  const {width, height} = useWindowDimensions()
  return (
    <>
    {      
      supplerSentencePrice.map((item:supplerSentencePriceType, i) => (
        <Card key = {i} containerStyle = {{...styled.container,  width:width}}>
          {
            props.productView === 'grid' ?
            <View style ={{...styled.gridContainer, width:width }}>
              <Image
                source={ item.image.big } 
                style={{ width: 300, height: 200 }}
              />
              <Divider />
            </View>
            :
            null
          }
          <ListItem 
            leftElement={
              props.productView === 'list' ? 
              <Image
                source={ item.image.small }
                style={{ width: 56, height: 56 }}
              />
            : <View/>
            }
            rightElement ={
              <Image
                source={ require('./../assets/basket.png') }
                style={{ width: 45, height: 45 }}
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
      ))
    }
    </>
  )
}
const styled = StyleSheet.create({
  container:{
    margin:0,
    marginBottom: 8,
    shadowOffset:{width: 3, height: 3},
    shadowColor: Colors.shadow,
    shadowOpacity: 5
  },
  gridContainer:{
    flexDirection: 'row', 
    justifyContent:'center',
    height:220
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
    fontSize:16,
  },
  costText:{
    fontSize:18,
    fontWeight:'700',
    color:Colors.textblack,
    lineHeight: 30  ,
  },
  preoderedQuantityText:{
    color: Colors.icongrey,
    fontSize: 14,
    marginRight: 5,
    fontWeight:'400'
  },

})
export default SupplerSentencePriceDetals
