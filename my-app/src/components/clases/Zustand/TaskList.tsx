import { useState, type ChangeEvent, type FormEvent } from "react"
import { useTaskListStore } from "../../../store/listSlice"

export default function TaskList() {
  const [taskName, setTaskName] = useState<string>("")
  const [isDone, setIsDone] = useState<boolean>(false)
  const taskList = useTaskListStore((state) => state.list)
  const addTask = useTaskListStore((state) => state.add)
  const removeTask = useTaskListStore((state) => state.remove)
  const toggleDone = useTaskListStore((state) => state.isDone)

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault()
    addTask({id: e.timeStamp, name: taskName, isDone: isDone})
  }

  return (
    <section className=" w-full h-full flex flex-col">
      <h1 className=" text-xl text-slate-950 text-center font-extrabold pt-3">Aniade una Tarea</h1>
      <form className=" flex flex-col justify-center items-center gap-3 p-6 bg-slate-900 border border-slate-600 m-auto w-[800px] rounded-xl mb-2" onSubmit={handleAddTask}>
        <div className=" flex gap-1 text-center items-center justify-center">
          <label htmlFor="taskInput" className=" text-lg font-semibold">task: {" "}</label>
          <input type="text" id="taskInput" value={taskName} onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskName(e.target.value)} className=" bg-slate-800 border-b border-cyan-500 rounded-xl px-3 py-1"/>
        </div> 
        <div><input type="checkbox" className=" bg-amber-100 size-5 rounded-xl" onChange={(e: ChangeEvent<HTMLInputElement>) => setIsDone(e.target.checked)} checked={isDone} /></div>
        <button className=" px-2 py-1 bg-red-950 rounded-lg w-[300px] shadow shadow-slate-900 ">Create Task</button>
      </form>
      <h1 className=" text-xl text-slate-950 text-center font-extrabold pt-3">Lista de Tareas</h1>
      <div className=" p-4">{taskList.length === 0 ? <h1 className=" text-3xl text-center text-green-500 font-semibold">Actualmente no hay elementos en la lista para mostrar</h1> : <ul className=" flex flex-col p-4 gap-4 justify-center items-center">{taskList.map((task) => (
        <li key={task.id} className= " flex flex-col justify-center items-center gap-4 bg-slate-900 shadow shadow-slate-950 p-5 rounded-xl">
          <p className=" text-xl font-semibold tracking-tight text-center">{task.name}</p>
          <input type="checkbox" checked={task.isDone} onChange={() => toggleDone(task.id)}/>
          <button onClick={() => removeTask(task.id)} className=" bg-red-600 px-3 py-1 text-center text-xl font-semibold rounded-lg">Remove Task</button>
        </li>
      ))}</ul>}</div>
    </section>
  )
}