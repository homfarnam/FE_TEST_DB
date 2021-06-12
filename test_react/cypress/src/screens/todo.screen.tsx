import * as React from 'react'
import { useParams } from 'react-router'
import { ErrorMsg } from '../components/ErrorMsg'
import { Loading } from '../components/Loading'
import { Todo } from '../components/Todo'
import { useGetTodo } from '../hooks/todo.hooks'

export default function TodoScreen() {
  const { id } = useParams<{ id: string }>()

  const { status, data } = useGetTodo(+id)

  return ['loading', 'idel'].includes(status) ? (
    <Loading />
  ) : status === 'success' ? (
    data ? (
      <Todo {...data} />
    ) : null
  ) : (
    <ErrorMsg>Failed to load todo</ErrorMsg>
  )
}
