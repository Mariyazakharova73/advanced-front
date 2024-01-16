import type { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { type StateSchema } from '../config/StateSchema'
import { createReduxStore } from '../config/store'

export interface StoreProviderProps {
  children: ReactNode
  initialState?: StateSchema
}

const StoreProvider: FC<StoreProviderProps> = ({ children, initialState}) => {
  const navigate = useNavigate()
  const store = createReduxStore(initialState)

  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
