import { VStack, Text, Box, ScrollView, Divider } from "native-base";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";
import { Titulo } from "../componentes/titulo";

export default function Principal() {
    return (
        <ScrollView flex={1} bg={"white"}>
            <VStack flex={1} alignItems={'flex-start'} justifyContent={'flex-start'} p={5}>
                <Box w={'100%'} borderRadius={'lg'} p={3} shadow={1} borderBottomRightRadius={'md'}>
                    <EntradaTexto
                        placeholder="Digite a especialidade"
                    />
                    <EntradaTexto
                        placeholder="Digite sua localização"
                    />
                    <Botao mt={3} mb={3}>Buscar</Botao>
                </Box>

                <Titulo color={'blue.800'} alignSelf={'center'} mb={4}>Depoimentos</Titulo>

                <Text color={'gray.300'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id aliquet mi, congue gravida nulla. Pellentesque ac efficitur ante.
                    Morbi volutpat et dui auctor pretium. Suspendisse nec fermentum sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Nullam laoreet, nibh et fringilla euismod, elit tortor pharetra massa, in pulvinar ligula tortor eget nisi.
                    Nunc sapien turpis, egestas ac orci vitae, finibus convallis diam. Mauris eget dapibus lacus. Fusce ipsum arcu, gravida sed porta et, dictum id eros.</Text>

                <Titulo fontSize={'md'} ml={10}>Julia, 40 anos, São Paulo-SP</Titulo>
                <Divider mt={7} mb={3} />

                <Text color={'gray.300'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id aliquet mi, congue gravida nulla. Pellentesque ac efficitur ante.
                    Morbi volutpat et dui auctor pretium. Suspendisse nec fermentum sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Nullam laoreet, nibh et fringilla euismod, elit tortor pharetra massa, in pulvinar ligula tortor eget nisi.
                    Nunc sapien turpis, egestas ac orci vitae, finibus convallis diam. Mauris eget dapibus lacus. Fusce ipsum arcu, gravida sed porta et, dictum id eros.</Text>

                <Text color={'gray.300'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id aliquet mi, congue gravida nulla. Pellentesque ac efficitur ante.
                    Morbi volutpat et dui auctor pretium. Suspendisse nec fermentum sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Nullam laoreet, nibh et fringilla euismod, elit tortor pharetra massa, in pulvinar ligula tortor eget nisi.
                    Nunc sapien turpis, egestas ac orci vitae, finibus convallis diam. Mauris eget dapibus lacus. Fusce ipsum arcu, gravida sed porta et, dictum id eros.</Text>

                <Titulo fontSize={'md'} ml={10}>Luana, 40 anos, São Paulo-SP</Titulo>
                <Divider mt={7} mb={3} />

                <Text color={'gray.300'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id aliquet mi, congue gravida nulla. Pellentesque ac efficitur ante.
                    Morbi volutpat et dui auctor pretium. Suspendisse nec fermentum sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Nullam laoreet, nibh et fringilla euismod, elit tortor pharetra massa, in pulvinar ligula tortor eget nisi.
                    Nunc sapien turpis, egestas ac orci vitae, finibus convallis diam. Mauris eget dapibus lacus. Fusce ipsum arcu, gravida sed porta et, dictum id eros.</Text>
            </VStack>
        </ScrollView>
    )
}