'use client'

import IList from '../type/iList'
import { useState } from 'react'
import List from './list'

export default function TaskList() {
    
    let tasklist:IList[] = [
        {id: 0, info:"aa"},
        {id: 1, info:"ss"},
        {id: 2, info:"dd"},
        {id: 3, info:"ff"},
        {id: 4, info:"gg"},
        {id: 5, info:"hh"},
        {id: 6, info:"jj"},
        {id: 7, info:"kk"}        
    ]
    return (
      <>
        <List list={tasklist}/>
      </>
  )
}
