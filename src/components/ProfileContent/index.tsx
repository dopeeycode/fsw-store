'use client'

import { useSession, signOut } from 'next-auth/react'
import { Avatar } from '../ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { formatName } from '@/utils/format-name'

const ProfileContent = () => {
  const { data } = useSession()

  const userName = formatName(data?.user?.name!)

  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={data?.user?.image!} />
          <AvatarFallback>{userName}</AvatarFallback>
        </Avatar>

        <span className="text-sm font-semibold">{userName}</span>
      </div>
    </div>
  )
}

export default ProfileContent
