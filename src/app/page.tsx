import TodoItem from '@/components/TodoItem'
import { prisma } from '@/db'
import Image from 'next/image'

export default async function Home() {
  
  const todos = await prisma.tODO.findMany();
  return (
    <main>
      <div>Todos</div>
      <div>
        <ul>
          {
            todos.map((todo,index)=>(
              <TodoItem {...todo} key={index} />
            ))
          }
        </ul>
      </div>
    </main>
  )
}
