import Banner from "../../components/banner";

export default function Home(){
    return(
        <>
        <Banner h1={"Telescopio espacial James Webb"} src={"telescopio-espacial-james-webb.webp"} alt={"Telescopio espacial James Webb"} title={'Telescopio espacial James Webb'} p={`O Telescópio Espacial James Webb, em inglês James Webb Space Telescope (JWST), é um telescópio espacial projetado pela Nasa em colaboração com a Agência Espacial Europeia (ESA) e a Agência Espacial Canadiana (CSA) com o intuito de substituir o Telescópio Espacial Hubble. 
        Ele foi desenvolvido para responder aos questionamentos sobre a formação do universo, a existência de planetas habitáveis, a evolução de galáxias, estrelas, buracos negros e sistemas planetários e investigar com profundidade os exoplanetas. Ele possui mais de 100 vezes a sensibilidade a ondas eletromagnéticas do Telescópio Espacial Hubble e possui um espelho de captura de imagens 2,5 vezes maiores que o mesmo`}>
            <p className="textBanner">O Telescópio Espacial James Webb está localizado a aproximadamente 1.500.000 quilômetros da Terra, no ponto Sol-Terra L2 Lagrange, orbitando ao redor da Terra e do Sol, estando mais distante que a Lua, que está a 384.400 quilômetros da Terra.

            Essa localização foi escolhida de maneira estratégica para a observação dos comprimentos de onda de luz do infravermelho, já que para observar isso é necessário que ele esteja abaixo da temperatura de 50 K (Kelvin), equivalente a -223 ºC, que seus detectores estejam afastados da  luz solar e da emissão térmica terrestre e, ainda assim, que consiga manter comunicação com a Terra.</p>
        </Banner>
        </>
    )
}