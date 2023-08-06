import "./styleBanner.css"

interface BannerPrpos{
    h1: string;
    src: string;
    alt: string;
    title?: string;
    p: string;
    children?:any;
}

export default function Banner({h1, src, alt,title , p,children}: BannerPrpos): JSX.Element {
    return(
        <>
        <div className="divMain">
            <h1 className="titleBanner">{h1}</h1>
            <img className="imgBanner" src={src} alt={alt} title={title}/>
            <p className="textBanner">{p}</p>
            {children}
        </div>
        </>
    )
}