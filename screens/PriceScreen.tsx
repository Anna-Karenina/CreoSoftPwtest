import * as React from 'react'
import {  ScrollView } from 'react-native'
import SupplerCard from './../components/SupplerCard'
import { supplersList, supplerListType } from './../core/data'

const PriceScreen = () =>{
  return (
    <ScrollView>
      {
        supplersList.map( (i:supplerListType) =>(
          <SupplerCard 
            key= {i.id}
            id={i.id} 
            logo={i.logo} 
            name={i.name} 
            product={i.product} 
            priceupload = {i.priceupload} 
            badgecount={i.badgecount}
          />
        ))
      }
    </ScrollView>
  )
}
export default PriceScreen