import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from '../componentes/titulo'

export default function Perfil() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>

                <Titulo color="blue.500">Informações Pessoais</Titulo>
                <Avatar size="xl" source={{ uri: "https://avatars.githubusercontent.com/u/102029668?v=4" }}></Avatar>

            <Text>Meu Perfil</Text>
            <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/102029668?v=4' }} mt={5} />
            <Titulo>Ana Luísa</Titulo>
            <Titulo>19/04/2006</Titulo>
            <Titulo>Votuporanga / SP</Titulo>
            <Divider mt={5} />

            <Titulo>Historico Médico</Titulo>
            <Text fontSize={18}>Bronquite</Text>
            <Text fontSize={18}>Sinusite</Text>

        </VStack>
        </ScrollView>
    )
}