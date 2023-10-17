'use client'

import { useSession, signOut } from 'next-auth/react'
import { Avatar } from '../ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { formatName } from '@/utils/format-name'

const ProfileContent = () => {
  const { data } = useSession()
  const userName = formatName(data?.user?.name!)
  


  return (
    <div className="flex mb-4 items-center justify-between">
      <div className="flex gap-3 items-center">
        <Avatar>
          <AvatarImage src={data?.user?.image!} />
          <AvatarFallback>{userName}</AvatarFallback>
        </Avatar>

        <span className="font-semibold text-sm">
          {userName}
        </span>
      </div>
      
    </div>
  )
}

export default ProfileContent