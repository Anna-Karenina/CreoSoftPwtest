import * as React from 'react'
import { ListItem } from 'react-native-elements'
import { View,Text ,TouchableHighlight, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'


import { Colors } from '../core/Colors'


const SupplerCard: React.FC<any> = ({supplerdata}) =>{
  const {id, logo, name, product, priceupload, badgecount }  = supplerdata
  const navi = useNavigation()
  const route = useRoute();

  return (
    <ListItem
      key={id}
      Component={TouchableHighlight}
      onPress={ ()=>navi.navigate('priceSentenceStack', {supplerdata}) }
      title ={name}
      titleStyle = {styled.titleText}
      containerStyle={
        route.name === 'priceSentenceStack' || route.name === 'OrderSentenceScreen' ? styled.containerwithoutmargin : 
          id === 1 ? [styled.container,styled.fistchild ] : styled.container
        }
      leftAvatar={{ 
        containerStyle:{width:65, height:65, borderRadius: 40},
        source: logo === null ? require('./../assets/nologo.png') : {uri:logo}} }
      subtitle={
        <View>
          <Text style = {styled.productText}>{product}</Text>
          <Text style = {styled.priceuploadText}>{priceupload}</Text>
        </View>
      }
      bottomDivider
      badge={ 
        badgecount?.length === 0 ? { containerStyle: {display:'none'} } 
        : 
        { value: badgecount?.length, status: 'success', textStyle: { ...styled.badgeText}, badgeStyle: { ...styled.badgeContainer } }
      }
  />
  )
}
const styled = StyleSheet.create({
  fistchild:{
    marginTop: 10,
  },
  container:{ 
    marginLeft:10, 
    marginRight:10, 
    marginTop: 4.5,
    marginBottom: 4.5,
    minHeight:104.5 , 
    shadowOffset:{width: 5, height: 5},
    shadowColor: Colors.shadow,
    shadowOpacity: 5
  },
  containerwithoutmargin:{
    minHeight:104.5
  },
  titleText:{
    color: Colors.sunshine,
    fontWeight: '400',
    fontSize: 18
  },
  productText:{
   color: Colors.textblack, 
   lineHeight: 26, 
   letterSpacing: 0.4,
   fontWeight: '700', 
   fontSize: 20
  },
  priceuploadText:{
    lineHeight: 20, 
    fontSize:16,
    fontWeight:'400',
    color: Colors.icongrey
  },
  badgeContainer:{
    width: 35,
    height: 35,
    borderRadius:15
  },
  badgeText:{
    color: '#ffffff',
    fontSize:16, 
    fontWeight:'700' 
  }
})
export default SupplerCard
