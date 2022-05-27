// {Name: Synergy_voice_assistant_Integrations_Example}
// {Description: Contains examples on how to integrate Synergy with different platforms and frameworks}



// Synergy can be integrated with any application on most popular platforms and supports many different frameworks.
// This example will guide you through how to do a basic integration of Synergy with your app.



// In case you don't have your own app yet, we also have premade examples for different platforms and languages available on our GitHub (https://github.com/alan-ai).
// All you'll need to do is clone the repository, load the example you are interested in, and run/explore it in your preferred IDE.
//
// iOS Integration Examples
// - Swift: https://github.com/alan-ai/alan-sdk-ios/tree/master/examples/alan-example-integration-swift
// - ObjectiveC: https://github.com/alan-ai/alan-sdk-ios/tree/master/examples/alan-example-integration-objectivec
//
// Android Integration Examples
// - Java: https://github.com/alan-ai/alan-sdk-android/tree/master/examples/alan-example-integration-java
// - Kotlin: https://github.com/alan-ai/alan-sdk-android/tree/master/examples/alan-example-integration-kotlin
//
// Web Integration Examples
// - React: https://github.com/alan-ai/alan-sdk-web/tree/master/examples/alan-example-integration-react
// - Angular: https://github.com/alan-ai/alan-sdk-web/tree/master/examples/alan-example-integration-angular
// - Vue: https://github.com/alan-ai/alan-sdk-web/tree/master/examples/alan-example-integration-vue
// - Ember: https://github.com/alan-ai/alan-sdk-web/tree/master/examples/alan-example-integration-ember
// - Electron: https://github.com/alan-ai/alan-sdk-web/tree/master/examples/alan-example-integration-electron



// If you want to try one of these examples connected to this project, open the Embed Code popup located in the top menu in the Synergy Studio.
// Here you will find an Synergy SDK Key. Simply copy it and replace this key '314203787ccd9370974f1bf6b6929c1b2e956eca572e1d8b807a3e2338fdd0dc/prod' in your project.



// If you want to integrate Synergy with your existing app, you can find platform-specific guidance in the Embed Code popup.
// Platform-specific topics on how to integrate Synergy with your application are also covered in our documentation.
//
// iOS Integration
// - Swift: https://alan.app/docs/client-api/ios/ios-api#integrate-into-swift
// - ObjectiveC: https://alan.app/docs/client-api/ios/ios-api#integrate-into-objective-c
//
// Android Integration
// - Java: https://alan.app/docs/client-api/android/android-api
// - Kotlin: https://alan.app/docs/client-api/android/android-api
//
// Web Integration
// - React: https://alan.app/docs/client-api/web/react
// - Angular: https://alan.app/docs/client-api/web/angular
// - Vue: https://alan.app/docs/client-api/web/vue
// - Ember: https://alan.app/docs/client-api/web/ember
// - JavaScript: https://alan.app/docs/client-api/web/vanilla
// - Electron: https://alan.app/docs/client-api/web/electron
// - Web Component: https://alan.app/docs/client-api/web/web-component



question(['can I park now?', 'how many free parking spots are available', '6th floor status', 'How many (spots|available&parking in the parking)'] , p => {

    //const api_url = "http://172.17.17.217:33889/parkinglot/6";
    const api_url = "https://azurebot.synisys.com/8e8f766d-837b-4a25-b427-442fd757406a/parking/status/6";
    try {
        api.axios.get(api_url)
            .then( response => {
            const parkingData = response.data;
            let freeSpots = parkingData.capacity - parkingData.occupied;
            if(!freeSpots){
                p.play("There are no spots in the parking, please find other parking place");
            } else {
                p.play("There are " + freeSpots + " available spots in the parking");
            }
        }).catch(err => {
            //p.play("You connected to your local network, please turn off it")
        });

        // Pushing the tracks names to the tracksList

    } catch(error) {
        console.log(error);
    }

    //p.play('This is an example app with voice capabilities. (Powered by Synergy|Voice support is provided by Synergy)');
});


question('open & parking & gate', p => {
    p.play('gate opened');
});



question('what is Synergy (AI|Platform|)', p => {
    p.play('Synergy (AI|Platform) is a platform that will allow you to voice enable any application. Be it mobile app on iOS or Android, or a web page.');
});



question('what (platforms|SDK|frameworks) are supported', p => {
    p.play('Synergy (AI|Platform) supports native iOS, Android, and Web applications. As well as Flutter, Ionic and many other popular frameworks.');
});