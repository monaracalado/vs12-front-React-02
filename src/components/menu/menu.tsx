import MenuBase from "../menuBase/menuBase";
import "./styleMenu.css"

export default function Menu() {
    return(
        <>
        <div className="divMenu">
            <MenuBase to='/'>Home</MenuBase>
            <MenuBase to='/texto'>Posts</MenuBase>
            <MenuBase to='/galeria'>Galeria</MenuBase>
            <MenuBase to='contador'>Contador</MenuBase>
        </div>
        </>

    );
}