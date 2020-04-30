import * as React from 'react'
import { StyleSheet, View } from 'react-native'

interface IRaitingProps {
  instock: string | undefined
}

const Raiting: React.FC<IRaitingProps> = (props) => {
  return (
    <>
    <View
      style={props.instock === 'few' ? 
      [styled.circle, styled.circleRED] : [styled.circle, styled.circleGreen] }
    />
    <View
      style={props.instock === 'few' ? 
      [styled.circle] : [styled.circle, styled.circleGreen] }
    />
    <View
      style={props.instock === 'few' ? 
      [styled.circle] : [styled.circle, styled.circleGreen] }
    />
   </>
  )
}

const styled = StyleSheet.create({
  circle:{
    backgroundColor:'rgba(138, 140, 156, .5)',
    width: 9, 
    height: 9, 
    marginRight: 3,
    borderRadius:50,
  },
  circleRED:{
    backgroundColor: '#ff7f27',
  },
  circleGreen:{
    backgroundColor: '#8dc63f',
  }
})
export default Raiting
