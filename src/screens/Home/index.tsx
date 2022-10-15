
import { Image, FlatList}           from "react-native";
import {useNavigation}              from "@react-navigation/native"; 
import { styles }                   from "./styles";
import logoImg                      from '../../assets/logo.png';
import { Heading }                  from "../../componentes/Heading";
import { SafeAreaView }             from "react-native-safe-area-context";
import { GameCard, GameCardProps }  from "../../componentes/GameCard";
import { useEffect, useState }      from "react";
import { Background }               from "../../componentes/background";

export function Home(){
    
    const [games, setGames] = useState<GameCardProps[]>([]);
    const navigation = useNavigation();

    function handleOpenGame({id, title, banner}:GameCardProps){
         navigation.navigate('game', {id, title, banner});
    }

    useEffect(() => {
        fetch('http://192.168.0.156:3333/games')
        .then(Response => Response.json())
        .then(data => setGames(data))
    }, []);
    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image 
                source={logoImg}
                style={styles.logo}/> 

                <Heading  
                title="Encontre seu dou!"
                subtitle="Selecione o game que deseja jogar..."/>   

                <FlatList horizontal 
                    showsHorizontalScrollIndicator = {false}
                    contentContainerStyle={styles.contentList}
                    data={games}
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>(
                        <GameCard style={styles.contentList} onPress ={() => handleOpenGame(item)}
                        data={item} />   
                    )}
                />   
            </SafeAreaView>
        </Background>
    );
}