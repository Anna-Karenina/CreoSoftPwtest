export const supplersList = [
  {
    id: 1,
    name:'Галеон-трейд' ,
    product: 'Стеклокерамика',
    badgecount: [{id:1} , {id:2}],
    priceupload: '28.05.2019',
    logo: null,
  },
  {
    id: 2,
    name:'Галеон-трейд' ,
    product: 'Стеклокерамика',
    badgecount: [{id:1} , {id:2}],
    priceupload: '28.05.2019',
    logo: null,
  },
  {
    id: 3,
    name:'Галеон-трейд' ,
    product: 'Стеклокерамика',
    badgecount: [],
    priceupload: '28.05.2019',
    logo: null,
  },
  {
    id: 4,
    name:'Галеон-трейд' ,
    product: 'Стеклокерамика',
    badgecount: [],
    priceupload: '28.05.2019',
    logo: null,
  },
  {
    id: 5,
    name:'Галеон-трейд' ,
    product: 'Стеклокерамика',
    badgecount: [],
    priceupload: '28.05.2019',
    logo: null,
  },
  {
    id: 6,
    name:'Галеон-трейд' ,
    product: 'Стеклокерамика',
    badgecount: [],
    priceupload: '28.05.2019',
    logo: null,
  },
]
export type supplerListType ={ 
  id: number
  name:string ,
  product: string,
  badgecount?: Array<any>
  priceupload?:string,
  logo: null,
}


export const supplerSentencePrice = [
  {
    id:'00145',
    supplerId: 1,
    name: 'Кружка Fix Price',
    cost: 700,
    preoderedQuantity: 15,
    instock: 'few',
    image :{
      big:require('./../assets/FixPriceBig.png') ,
      small:require('./../assets/FixPrice.png') ,
    }
  },
  {
    id:'00140',
    supplerId: 1,
    name: 'Кружка «Grain»',
    cost: 2500,
    preoderedQuantity: 0,
    instock: 'many',
    image :{
      big: require('./../assets/Grain.png') ,
      small:require('./../assets/Grain.png') ,
    }
  },
  {
    id:'00145',
    supplerId: 1,
    name: 'Кружка Fix Price',
    cost: 700,
    preoderedQuantity: 15,
    instock: 'few',
    image :{
      big:require('./../assets/FixPriceBig.png') ,
      small:require('./../assets/FixPrice.png') ,
    }
  },
]
export type supplerSentencePriceType = { 
  id: string
  supplerId?: number
  name?: string
  cost?: number
  preoderedQuantity?:number
  instock?: string
  image: {
    big:any
    small:any
  }
}

export const isEmptyObject= (obj:Object) =>  {
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      return false;
    }
  }
  return true;
}