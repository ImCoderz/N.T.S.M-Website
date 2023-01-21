import langs from '../../../init/index';
import './menu.css'
export const Menu = () => {
    const menuItem=langs.ang.identity.menu
    return(
        <ul className='container w-[40%]'>
           <li> <a href='./'> </a>{menuItem.homePage}</li>
           <li> <a href=''>{menuItem.aboutPage}</a></li>
           <li><a href='./books'>{menuItem.readPage}</a></li>
           <li> <a href =''>{menuItem.contactPage}</a></li>
        </ul>

    )
}