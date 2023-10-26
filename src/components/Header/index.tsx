import "./styles.scss"

export function Header(){

    return (
        <header>
            <div className="container div-header">
                <div className="div-infos">
                    <p className="img">img</p>
                    <p>Marcelo Meirelles</p>
                </div>
                <div className="div-buttons">
                    <button>Whatsapp</button>
                    <button>CV</button>
                    <button>LinkedIn</button>
                    <button>Github</button>
                </div>
            </div>

        </header>
    )
}