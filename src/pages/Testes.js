import * as React from 'react';
import { Button, View, Text } from 'react-native';

// export default function HomeScreen({ navigation }) {
//     return (
//         <View>
//             <Text>Tudo Certinho</Text>
                // onPress={() => navigation.navigate('Home')} 

//             {/* <Teste /> */}
//         </View>
//     );
// }

export default class Teste extends React.Component {
    constructor(props){
        super(props);

        const rotas = this.props.route;
        const otherParam = this.props.route.params.otherParam;
        console.log(otherParam);
        console.log(rotas);

      }

    render(){
        return (
            <View>
                
                <Button
                    title="Go to Home"
                    onPress={() =>
                        this.props.navigation.navigate('Home')
                      }

                />
            </View>
        );
    }
}
