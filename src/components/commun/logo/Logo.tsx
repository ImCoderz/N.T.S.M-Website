import langs from '../../../init/index';
import './logo.css';
export const Logo = () => {
    const identify=langs.ang.identity;
    return (
     
           <div className="content">
               <p className='text-2xl font-bold water cursor-pointer'>{identify.logoName}</p>
               <p className='text-2xl font-bold water cursor-pointer'>{identify.logoName}</p>
           </div>
      
    )
}