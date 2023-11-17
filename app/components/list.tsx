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
                            <input type="text" value={t.info} />
                        </ol>
                    </ul>
                ))}
            </div>

            <div className='flex flex-col gap-3'>
                <input placeholder='  text' className='outline-dashed'/>
                <button className='outline'>add</button>
            </div>

        </div>

    </>

  )
}
