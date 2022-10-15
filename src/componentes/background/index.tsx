import { ImageBackground, View }    from "react-native";
import { styles }                   from "./styles";
import backgroundImg                from '../../assets/backgroundImg.png';

interface Props {
    children: React.ReactNode;
}

export function Background({children}: Props) {
    return (
      
        <ImageBackground
            source={backgroundImg}
            defaultSource={backgroundImg}
            style={styles.container}>

            {children}
        </ImageBackground>

    );
}