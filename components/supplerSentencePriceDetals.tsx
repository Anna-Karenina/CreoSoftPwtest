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
            <>
            <View style ={{...styled.gridContainer, width:width }}>
              <Image
                source={ item.image.big } 
                style={{ width: width, height: 290 }}
              />
            </View>
              <Divider style = {{ width: width,height: 0.7}} />
              </>
            :
            null
          }
          <ListItem 
            leftElement={
              props.productView === 'list' ? 
              <Image
                source={ item.image.small }
                style={{ width: 70, height: 70 }}
              />
            : <View/>
            }
            rightElement ={
              <Image
                source={ require('./../assets/basket.png') }
                style={{ width: 60, height: 60 }}
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
    marginBottom: 13,
    shadowOffset:{width: 5, height: 5},
    shadowColor: Colors.shadow,
    shadowOpacity: 5,
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft : 10,
    paddingRight : 10
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

})
export default SupplerSentencePriceDetals
