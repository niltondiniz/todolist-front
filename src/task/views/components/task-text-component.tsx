import { ListItemText } from "@mui/material";
import { ContainerTaskText } from "../style";

interface Props {
    text: string;
}
export default function (props: Props) {

    const { text } = props;

    return (
        <ContainerTaskText>
            <ListItemText style={{fontSize: 25, fontFamily: 'Roboto', color: '#404040'}} disableTypography primary={text} />
        </ContainerTaskText>
    )
}