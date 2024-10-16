// import { Separator } from "@/components/ui/separator"
import { Suspense } from "react"
import TaskPage from "@/components/tasks/task-page"

export default function Customers() {
  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <TaskPage />
    </Suspense>
  )
}
