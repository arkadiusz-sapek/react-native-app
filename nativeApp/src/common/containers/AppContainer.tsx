import React, { Component } from 'react';
import { Root } from 'native-base';
import { Font } from 'expo';

import { RootNavigator } from '../components/RootNavigator';
import { setTopLevelNavigator } from '../services/NavigationService';

export class AppContainer extends Component {
    public state = {
        isReady: false,
    };
    public componentDidMount() {
        this.loadFonts();
    }
    async loadFonts() {
        await Font.loadAsync({
            Ionicons: require('native-base/Fonts/Ionicons.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            MaterialIcons: require('native-base/Fonts/MaterialIcons.ttf'),
        });
        this.setState({ isReady: true });
    }
    render() {
        return (
            <Root>
                {this.state.isReady && (
                    <RootNavigator
                        ref={(navigatorRef: any) => {
                            setTopLevelNavigator(navigatorRef);
                        }}
                    />
                )}
            </Root>
        );
    }
}
