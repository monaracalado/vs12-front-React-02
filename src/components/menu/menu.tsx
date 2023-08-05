import MenuBase from "../menuBase/menuBase";


export default function Menu() {
    return(
        <>
        <div>
            <MenuBase to='/'>Home</MenuBase>
            <MenuBase to='/texto'>Posts</MenuBase>
            <MenuBase to='/galeria'>Sobre Galeria</MenuBase>
            <MenuBase to='contador'>Contador</MenuBase>
        </div>
        </>

    );
}