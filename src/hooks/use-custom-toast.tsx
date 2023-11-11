import React from 'react'
import { toast } from './use-toast'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/Button'

export const useCustomToast = () => {

  const loginToast = () =>{
    const {dismiss} = toast({
      title: 'You are not logged in',
      description: 'Please login to continue',
      variant: 'destructive',
      action:(
        <Link className={buttonVariants({
          variant: 'outline',
        })}
        href='/sign-in'
        onClick={()=>dismiss()} 
        >
        </Link>
      )
    })
  }


  return {loginToast}
}
