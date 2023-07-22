import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [status, setStatus] = useState('all')

  const handleChangeStatus = (value: string) => {
    setStatus(value)
  }
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root onValueChange={(value) => handleChangeStatus(value)}>
          <Tabs.List className="flex flex-row gap-x-2 pt-10">
            <Tabs.TabsTrigger
              value="all"
              className="rounded-full border-[1px] border-solid px-6 py-3 font-medium data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              All
            </Tabs.TabsTrigger>
            <Tabs.TabsTrigger
              value="pending"
              className="rounded-full border-[1px] border-solid px-6 py-3 font-medium data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              Pending
            </Tabs.TabsTrigger>
            <Tabs.TabsTrigger
              value="completed"
              className="rounded-full border-[1px] border-solid px-6 py-3 font-medium data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              Completed
            </Tabs.TabsTrigger>
          </Tabs.List>

          <div className="pt-10">
            <TodoList status={status} />
          </div>

          <div className="pt-10">
            <CreateTodoForm />
          </div>
        </Tabs.Root>
      </div>
    </main>
  )
}

export default Index
