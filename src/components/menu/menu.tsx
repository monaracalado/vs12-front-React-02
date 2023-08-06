import MenuBase from "../menuBase/menuBase";
import "./styleMenu.css"
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CollectionsIcon from '@mui/icons-material/Collections';

export default function Menu() {
    return(
        <>
        <div className="divMenu">
            <MenuBase to='/'><HomeIcon/>Home</MenuBase>
            <MenuBase to='/historia'><MenuBookIcon/>História</MenuBase>
            <MenuBase to='/galeria'><CollectionsIcon/>Galeria</MenuBase>
            <MenuBase to='contador'>Contador</MenuBase>
        </div>
        </>

    );
}