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
            supplerdata ={i}
            key = {i.id}
          />
        ))
      }
    </ScrollView>
  )
}
export default PriceScreen