import "./styles.scss"

interface IButtonProps{
    classStyle:string,
    icon:any
    text?:string,
    href?:any
}

export function Button({classStyle, icon, text, href}:IButtonProps){
    
    return(
        <a
        target="_blank"  
        href={href}
        className={classStyle}
        >{icon}{text}
        </a>
        
    )
    
}