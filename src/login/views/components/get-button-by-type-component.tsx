import { GitHub } from "@mui/icons-material";
import { Facebook, Google, Twitter } from "react-bootstrap-icons";

interface Props{
    type: string;
}
export default function GetButtonByType(props: Props){
    
    const { type } = props;

    if(type === "facebook"){
        return <Facebook/>
    }else if(type === "google"){
        return <Google/>
    }else if(type === "twitter"){
        return <Twitter/>
    }else if(type === "github"){
        return <GitHub/>
    }
}