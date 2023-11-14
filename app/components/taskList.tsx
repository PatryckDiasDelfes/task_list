import Image from 'next/image'
import IList from '../type/iList'
import { useState } from 'react'

export default function TaskList(props:{list:IList[]}) {
    const [list, setList] = useState(props.list)
  
    return (
  
    <>
    <section className='flex justify-center p-20'>

        
        <div className=''>
            <h1 className='flex justify-center'>
                Task List
            </h1>
            {list.map((t) => (
                <ul>
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
            <input placeholder='  text' type="text" className='outline'/>
            <div className='flex justify-center'>
                <button>add</button>
            </div>
        </div>

      </section>
    </>

  )
}
