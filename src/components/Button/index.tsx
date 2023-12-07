import "./styles.scss"

interface IButtonProps{
    classStyle:string,
    icon?:any
    text?:string,
    href?:string,
    target?:string
}

export function Button({classStyle, icon, text, href, target}:IButtonProps){
    
    return(
        <a
        target={target}
        href={href}
        className={classStyle}
        >{icon}{text}
        </a>
        
    )
    
}