"use client"
import {ReactNode, FC} from 'react'
import { SessionProvider } from 'next-auth/react'

interface ProviderProps {
    children: ReactNode
}

const Provider: FC<ProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
};
export default Provider