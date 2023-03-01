import Background from "@assets/images/background_home.png";
import { Load } from "@components/Animations/Load/index";
import { BoxSlider } from "@components/BoxSlider";
import Header from "@components/Header";
import { IconText } from "@components/IconText";
import ScreenView from "@components/ScreenView";
import { useSession } from "@context/Session";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Animated, FlatList, StyleSheet } from "react-native";
import * as S from "./styles";

interface IState {
  id: string;
  description: string;
  name: string;
  city: ICitys[];
  image: string;
  cityes: ICitys;
  states: IState;
}

interface ICitys {
  id: string;
  state: string;
  description: string;
  city: string;
  image: string;
  attractions: IAttractions[];
}

interface IAttractions {
  id: string;
  name: string;
  description: string;
  image: string;
}

const Home = () => {
  const navigation = useNavigation();
  const { session } = useSession();
  const [state, setState] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollX = useRef(new Animated.Value(0)).current;
  ///estados
  useEffect(() => {
    setIsLoading(true);

    const subscribe = firestore()
      .collection("states")

      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as IState[];

        if (data.length > 0) {
          setIsLoading(false);
        }
        // console.log(
        //   "data",
        //   data.map((item) => item.cityes.)
        // );
        setState(data.map((item) => item));
        // console.log("=========", state);
      });

    return () => subscribe();
  }, []);

  // useEffect(() => {
  //   handleAdd();
  // }, []);

  // function handleAdd() {
  //   firestore()
  //     .collection("states")
  //     .add({
  //       states: {
  //         id: "2",
  //         name: "Parana",
  //         description:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //         image:
  //           "https://matuete.com/wpmatuete/wp-content/uploads/2013/12/floripa02.jpg",
  //         cityes: [
  //           {
  //             id: "1",
  //             state: "Santa Catarina",
  //             city: "Florianópolis",
  //             image: "https://i.imgur.com/UPrs1EWl.jpg",
  //             description:
  //               "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //             attractions: [
  //               {
  //                 id: "1",
  //                 name: "Praia do Campeche",
  //                 description:
  //                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //                 image: "https://i.imgur.com/UPrs1EWl.jpg",
  //               },
  //               {
  //                 id: "2",
  //                 name: "Praia dos Ingleses",
  //                 description:
  //                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //                 image: "https://i.imgur.com/UPrs1EWl.jpg",
  //               },
  //               {
  //                 id: "3",
  //                 name: "Praia do Santinho",
  //                 description:
  //                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //                 image: "https://i.imgur.com/UPrs1EWl.jpg",
  //               },
  //             ],
  //           },
  //           {
  //             id: "2",
  //             state: "Santa Catarina",
  //             city: "Blumenau",
  //             image:
  //               "https://imply.com/wp-content/uploads/brinquedos-Natal-Blumenau-750x500.jpg",
  //             attractions: [
  //               {
  //                 id: "1",
  //                 name: "Praia do Campeche",
  //                 description:
  //                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //                 image:
  //                   "https://www.essemundoenosso.com.br/wp-content/uploads/2022/06/portal.jpg",
  //               },
  //               {
  //                 id: "2",
  //                 name: "Praia dos Ingleses",
  //                 description:
  //                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //                 image:
  //                   "https://www.essemundoenosso.com.br/wp-content/uploads/2022/06/portal.jpg",
  //               },
  //               {
  //                 id: "3",
  //                 name: "Praia do Santinho",
  //                 description:
  //                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //                 image: "https://i.imgur.com/UPrs1EWl.jpg",
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     });
  // }

  /////cidades

  // useEffect(() => {
  //   setIsLoading(true);

  //   const subscribe = firestore()
  //     .collection("states")
  //     .doc("id")
  //     .collection("cityes")
  //     .onSnapshot((querySnapshot) => {
  //       const data = querySnapshot.docs.map((doc) => {
  //         console.log("doc====", doc);
  //         return {
  //           id: doc.id,
  //           ...doc.data(),
  //         };
  //       }) as ICitys[];
  //       if (data.length > 0) {
  //         x;
  //         setIsLoading(false);
  //       }
  //       console.log("data", data);
  //       setCitys(data);
  //       // setIsLoading(false);
  //     });

  //   return () => subscribe();
  // }, []);

  // useEffect(() => {
  //   return onValue(ref(db, "/slider"), (querySnapShot) => {
  //     let data = querySnapShot.val() || {};
  //     let todoItems = { ...data };
  //     setSlider(todoItems);
  //     console.log("======", todoItems);
  //   });
  // }, []);

  return (
    <ScreenView statusbarColor="light">
      <S.Space />
      <Header isIconMenu={true} isIconBack={false} isImage />
      <S.ImageBackground
        source={Background}
        resizeMode="stretch"
        style={[
          StyleSheet.absoluteFillObject,
          { overflow: "hidden", zIndex: -1 },
        ]}
      />

      <S.Container>
        <S.Title>Selecione o estado, que deseja visitar.</S.Title>
      </S.Container>
      {isLoading ? (
        <Load />
      ) : (
        <S.Wrapper>
          <FlatList
            data={state.map((item: IState) => item.states)}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            snapToOffsets={[
              ...Array(state.map((item: IState) => item.states)),
            ].map((item) => item.length * 80)}
            decelerationRate="fast"
            horizontal
            snapToAlignment="start"
            scrollEventThrottle={16}
            style={{ width: "100%", marginBottom: 20 }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            renderItem={({ item }) => (
              <BoxSlider
                id={item.id}
                state={item.name}
                image={item.image}
                onPress={() =>
                  navigation.navigate("HomeDetails", {
                    item: {
                      id: item.id,
                      image: item.image,
                      state: item.name,
                    },
                  })
                }
              />
            )}
          />
        </S.Wrapper>
      )}
      <S.Content>
        <IconText title="Mais visitados!" icon="map-pin" />
      </S.Content>
    </ScreenView>
  );
};

export default Home;
