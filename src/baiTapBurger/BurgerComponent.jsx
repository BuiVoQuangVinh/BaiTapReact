import React, { Component } from 'react'

import { connect } from 'react-redux'
class BurgerComponent extends Component {
   


   
    renderHTML(item,qty,itemBurger ){
    
              if(item === 'salad' ){
                  for (let index = 0; index < qty; index++) {
                    itemBurger.push( 'salad' )
                      
                  }
    
              }
              else if(item==='cheese'){
                for (let index = 0; index < qty; index++) {
                    itemBurger.push( 'cheese')
                    
                }
                           
              }
              else{
                for (let index = 0; index < qty; index++) {
                    itemBurger.push('beef')
                    
                }
              }
    }
    render() {
        const itemBurger=[];
        // nhận burger từ props
        const {burger} = this.props;

        //  
        const key = Object.keys(burger).filter(key => {
            return burger[key] ;
          })

        // 
          key.map( (item)=>{
            return (
              this.renderHTML(item,burger[item],itemBurger)
            
            )
        } )

        return (
            <div>
                <div className='breadTop'></div>
        
                {itemBurger.map( (key)=>{
                    return ( 
                        <div className={key}></div>
                    )
                } )

                }
                <div className='breadBottom'></div>                         
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        burger: state.burgerReducer.burger,
    }
}


export default connect (mapStateToProps)(BurgerComponent)


