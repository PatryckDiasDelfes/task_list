'use state'

import IList from '../type/iList'
import { useState, useEffect } from 'react'

export default function List(props:{list:IList[]}) {

    const [list, setList] = useState(props.list)

    const [newTodo, setNewTodo] = useState<IList>({
        id: list.length,
        info: ""
    })

    function add() {
        setList([...list, newTodo])
    }

    function dlt(id: number) {
        const updatedList = list.filter(i => i.id != id)
        setList(updatedList)
    }

    function upd(id: number, newValue: string) {
        const updList = list.map((t) =>
            t.id === id ? { ...t, info: newValue } : t
        );
    }

  return (
  
    <>
  
        <div className='flex flex-col gap-5 justify-center p-10'>
            
            <h1 className='flex justify-center'>
               Task List
            </h1>

            <div>
                {list.map((t) => (
                    <ul className='flex gap-5'>
                        <p>
                            {t.id}
                        </p>
                        <ol>
                            <input type="text" onChange={() => {upd(t.id, t.info)}} defaultValue={t.info}/>
                            <button onClick={() => {dlt(t.id)}}>x</button>
                        </ol>
                    </ul>
                ))}
            </div>

            <div className='flex flex-col gap-3'>
                <input onChange={(e) => setNewTodo({...newTodo, info:e.target.value, id:list.length})} placeholder='  text' className='outline-dotted'/>
                <button onClick={() => {add()}} className='outline'>add</button>
            </div>

        </div>

    </>

  )
}
