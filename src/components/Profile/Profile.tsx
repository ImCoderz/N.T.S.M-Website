import React,{useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from '../commun/button';


const Profile = () => {
    const {user}=useAuth0()
    const [profile, setProfile] = useState(false)
  return (
    <div>
        <div className='' onClick={()=>setProfile(!profile)}>
            <img className='w-[40px] h-[40px] rounded-full cursor-pointer' src={user?.picture} alt={user?.name} />
        </div>
        {profile &&(
            <div className='flex flex-col gap-2 absolute right-20 top-16 bg-tahiti z-40 text-textcolor p-8'>
                <h4 className='text-lg font-bold text-purple text-left mr-8'>{user?.name}</h4>
                <ul className='flex flex-col gap-2'>
                    <li className='p-1 text-sm font-semibold cursor-pointer hover:text-rosy border-b  border-black'>test</li>
                    <li className='p-1 text-sm font-semibold cursor-pointer hover:text-rosy border-b  border-black'>test</li>
                    <li className='p-1 text-sm font-semibold cursor-pointer hover:text-rosy border-b  border-black'>test</li>
                </ul>
                <LogoutButton/>
            </div>
        )
        }
    </div>
  )
}

export default Profile