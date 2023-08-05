import "./style.css"
interface HeaderProps{
    src: string;
    alt: string;
    span?: string;
    children?: React.ReactNode;
}

export default function Header({ src, children, span}: HeaderProps): JSX.Element{
    return(
        <>
        <header className="header">
            <img className="imgLogo" src={src} alt={src} />
            <span className="titleLogo">{span}</span>
            {children}
        </header>
        </>
    )
}