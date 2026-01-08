import { useTaskListStore } from "../../../store/listSlice"

export default function TaskCounter() {
  const countTasks = useTaskListStore((state) => state.getCountNum())

  return (
    <section className=" text-white text-sm font-extrabold pt-2">Hay {" "}{countTasks} tareas terminadas en total</section>
  )
}