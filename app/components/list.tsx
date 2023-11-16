'use state'

import IList from '../type/iList'
import { useState, useEffect } from 'react'

export default function List(props:{list:IList[]}) {

    const [list, setList] = useState(props.list)

    const [newTodo, setNewTodo] = useState<IList>({
        id: list.length,
        info: ""
    })

  return (
  
    <>
    <section className='flex justify-center p-20'>

        
        <div className='flex flex-col gap-5'>
            
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
                            <li>
                                {t.info}
                            </li>
                        </ol>
                    </ul>
                ))}
            </div>

            <div className='flex flex-col'>
                <input placeholder='  text' type="text" className='outline-none'/>
                <button className='outline'>add</button>
            </div>

        </div>

      </section>
    </>

  )
}
