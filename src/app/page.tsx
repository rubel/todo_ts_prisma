import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import Image from "next/image";

async function todoClicked(id: string, complete: boolean) {
  "use server";
  const result = await prisma.tODO.update({
    where: { id },
    data: { complete: !complete },
  });
  console.log(result);
}

export default async function Home() {
  const todos = await prisma.tODO.findMany();
  return (
    <main>
      <div>Todos</div>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <TodoItem {...todo} key={index} todoClicked={todoClicked} />
          ))}
        </ul>
      </div>
    </main>
  );
}
