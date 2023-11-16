export const metadata = {
    title: 'Settings',
    description: 'Manage ccount and website settings',
}

import { authOptions, getAuthSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { UserNameForm } from '@/components/UserNameForm'

const page = async({}) => {

const session = await getAuthSession()
if(!session) {
    redirect(authOptions.pages?.signIn || '/sign-in')
}

  return <div className='max-w-xl mx-auto py-12'>
    <div className='grid items-start gap-8'>
        <h1 className='font-bold text-3xl md:text-4xl'>
            Settings
        </h1>
    </div>
    <div className='grid gap-10'>
        <UserNameForm user={{
            id:session.user.id,
            username:session.user.username || '',
        }} />
    </div>
  </div>
}

export default page
