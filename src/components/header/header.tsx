
interface HeaderProps{
    src?: string;
    children?: React.ReactNode;
}

export default function Header({ src, children}: HeaderProps): JSX.Element{
    return(
        <>
        <header>
            <img src={src} alt={src} />
            <div>{children}</div>
        </header>
        </>
    )
}