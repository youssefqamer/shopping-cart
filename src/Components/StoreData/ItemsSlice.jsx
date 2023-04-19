import { createSlice } from '@reduxjs/toolkit';
export let initialState={items:localStorage.getItem('data')?(JSON.parse(localStorage.getItem('data'))):[],
    totalItems:localStorage.getItem('totalItems')?(JSON.parse(localStorage.getItem('totalItems'))):0,
    totalPrice:localStorage.getItem('totalPrice')?(JSON.parse(localStorage.getItem('totalPrice'))):0,
}


export let ItemSlice=createSlice({
    name:'addItem',
    initialState,
    reducers:{

        addItem:(state,item)=>{
            let exist=state.items.find((ele)=>ele.id===item.payload.id)
            if(exist){
          let cart=state.items.map((ele)=>ele.id===exist.id?{...exist,quantity:exist.quantity+1}:ele)
           state.items=cart 
           localStorage.setItem('data',JSON.stringify(cart))
        }else{
            let cart= [...state.items,{...item.payload,quantity:1}]
            state.items=cart
            localStorage.setItem('data',JSON.stringify(cart))
        }

     let totalItems = state.totalItems=state.items.reduce((x,y)=>x+y.quantity,0)
        localStorage.setItem('totalItems',JSON.stringify(totalItems))
    let totalPrice=state.totalPrice=state.items.reduce((x,y)=>x+y.quantity*y.price,0)
   localStorage.setItem('totalPrice',JSON.stringify(totalPrice))

        },
        removeItems:(state,item)=>{
            let exist=state.items.find((ele)=>ele.id===item.payload.id)
            if(exist.quantity>1){
           let cart=state.items.map((ele)=>ele.id===exist.id?{...exist,quantity:exist.quantity-1}:ele)
           state.items=cart 
           localStorage.setItem('data',JSON.stringify(cart))
            }
            let totalItems = state.totalItems=state.items.reduce((x,y)=>x+y.quantity,0)
            localStorage.setItem('totalItems',JSON.stringify(totalItems))
        let totalPrice=state.totalPrice=state.items.reduce((x,y)=>x+y.quantity*y.price,0)
       localStorage.setItem('totalPrice',JSON.stringify(totalPrice))
        },
        removeProducts:(state,item)=>{
            let cart=state.items.filter((ele)=>ele.id!==item.payload.id)
            state.items=cart
            localStorage.setItem('data',JSON.stringify(cart))
            let totalItems = state.totalItems=state.items.reduce((x,y)=>x+y.quantity,0)
            localStorage.setItem('totalItems',JSON.stringify(totalItems))
        let totalPrice=state.totalPrice=state.items.reduce((x,y)=>x+y.quantity*y.price,0)
       localStorage.setItem('totalPrice',JSON.stringify(totalPrice))
        },
        
    }
    
})
export let {addItem,removeItems,removeProducts,addToStorage}=ItemSlice.actions
export let itemsReducer=ItemSlice.reducer
export let quantityReducer=ItemSlice.reducer
export let priceReducer=ItemSlice.reducer
