import Banner from "../../components/banner";
import './styleHistoria.css'
export default function Historia(){
    return(
        <>
        <Banner h1={"História do Telescópio Espacial James Webb"} src={"telescopio-james.jpeg"} alt={"Telescopio espacial James Webb"} title={'Telescopio espacial James Webb'} p={`Em setembro de 1989, antes do lançamento do Telescópio Espacial Hubble, durante um workshop realizado no Space Telescope Science Institute (STScI), iniciou-se a discussão sobre quem realizaria a “próxima grande missão” após o Telescópio Espacial Hubble.`}>
            <span className="textBanner">Foi iniciado, em 1996, o projeto do Telescópio Espacial de Próxima Geração — em inglês, Next Generation Space Telescope (NGST) —, da Nasa em colaboração com a Agência Espacial Europeia (ESA) e a Agência Espacial Canadiana (CSA). Em 2002, foi alterado o nome do Telescópio Espacial de Próxima Geração para Telescópio Espacial James Webb.</span>
            <span className="textBanner">Em 2007, o Telescópio Espacial James Webb deveria estar finalizado para lançamento, contudo ocorreram algumas falhas técnicas em seu espelho primário e novas reformulações que impediram que ele fosse lançado.</span>
            <span className="textBanner">As despesas orçamentárias para o Telescópio Espacial James Webb, em 2014, estavam escassas, no valor de 3,3 bilhões de dólares. Em vista disso, o Cômite Científico da Câmara dos Deputados dos Estados Unidos da América sugeriu interromper o projeto. Contudo, os seus custos já haviam ultrapassado 8 bilhões de doláres. Por fim, um novo acordo financeiro foi firmado, garantindo ao projeto 10 bilhões de dólares. Em 2016, o Telescópio Espacial James Webb foi concluído.</span>
            <span className="textBanner">Em 25 de dezembro de 2021, o Telescópio Espacial James Webb foi lançado a bordo do foguete Ariane 5, através do Centro Espacial de Kourou, na Guiana Francesa. Após apenas 31 minutos, ele já havia começado a implementação de seus painéis solares, antena, escudo solar, espelho e braço.</span>
            <span className="textBanner">O Telescópio Espacial James Webb, em 24 de janeiro de 2022, atingiu a sua localização atual, o ponto L2 Lagrange. Em 11 de julho de 2022, a Nasa divulgou a primeira imagem registrada pelo Telescópio Espacial James Webb ao presidente dos Estados Unidos da América, Joe Biden.</span>
            <span className="textBanner">Em 12 de julho de 2022, a Nasa divulgou ao público um conjunto de imagens registradas pelo Telescópio James Webb contendo imagens da Nebulosa Carina, Nebulosa do Anel Sul, Quinteto de Stephan, o Exoplaneta WASP 76b e o Aglomerado de Galáxias SMACS 0723. Provavelmente em 2032, o Telescópio Espacial James Webb finalizará a sua investigação do espaço.</span>
        </Banner>
        </>
    )
}