import './humburger.css'
export const Humburger = ({setMenu,menu}:{setMenu:React.Dispatch<React.SetStateAction<boolean>>,menu:boolean}) => {
     return (
        <div className="Humburger z-50 absolute top-5 right-5" onClick={()=>setMenu(!menu)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
     )

}