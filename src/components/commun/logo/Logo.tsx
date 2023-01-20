import Langs from '../../../utils/index';
import './logo.css';
export const Logo = () => {
    const identify=Langs.fr.identity;
    return (
     
           <div className="content">
               <p className='text-2xl font-bold water cursor-pointer'>{identify.logoName}</p>
               <p className='text-2xl font-bold water cursor-pointer'>{identify.logoName}</p>
           </div>
      
    )
}