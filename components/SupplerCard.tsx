import * as React from 'react'
import { ListItem } from 'react-native-elements'
import { View,Text ,TouchableHighlight, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { supplerListType } from '../core/data'
import { Colors } from '../core/Colors'


const SupplerCard: React.FC<supplerListType> = ({id, logo, name, product, priceupload, badgecount }) =>{
  const navi = useNavigation()
  const supplerdata: supplerListType = {
    id, logo, name, product, priceupload, badgecount 
  }
  return (
    <ListItem
      key={id}
      Component={TouchableHighlight}
      onPress={ ()=>navi.navigate('priceSentenceStack', {supplerdata}) }
      title ={name}
      titleStyle = {styled.titleText}
      containerStyle={
          id === 1 ? [styled.container,styled.fistchild ] : styled.container
        }
      leftAvatar={{ 
        containerStyle:{width:55, height:55},
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
        { value: badgecount?.length, status: 'success', textStyle: { color: '#ffffff',fontSize:14 }, badgeStyle: { ...styled.badgeContainer } }
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
    marginTop: 5,
    marginBottom: 5,
    minHeight:101, 
    shadowOffset:{width: 5, height: 5},
    shadowColor: Colors.shadow,
    shadowOpacity: 5
  },
  titleText:{
    color: Colors.sunshine,
    fontWeight: '400',
    fontSize: 16
  },
  productText:{
   color: Colors.textblack, 
   lineHeight: 26, 
   letterSpacing: 0.9,
   fontWeight: '700', 
   fontSize: 18
  },
  priceuploadText:{
    fontSize:14,
    fontWeight:'400',
    color: Colors.icongrey
  },
  badgeContainer:{
    width: 30,
    height: 30,
    borderRadius:15
  }
})
export default SupplerCard
