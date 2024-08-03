

export function TabButton({onSelect, children}){
 return(
        <li>
            <button onClick={onSelect}>{children}</button>
            </li>
 )
}

