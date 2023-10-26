import "./styles.scss"

interface IButtonProps{
    classStyle:string,
    text:any
}

export function Button({classStyle, text}:IButtonProps){
    
    return(
        <button className={classStyle}>{text}</button>
    )
}