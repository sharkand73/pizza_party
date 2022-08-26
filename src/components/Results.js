import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

import calculateWeights from '../supporting-code/Helper';

const Results = () => {

    //const results = calculateWeights(values);

    return (
        <div className = 'container'>
            <Header text = 'Results' />
            <div className = 'body'>
                {/* <div style={styles.row}>
                    <Text style={styles.col1}>Flour:</Text>
                    <Text style={styles.col2}>{`${results.flourWeight}g`}</Text>
                </div>
                <div style={styles.row}>
                    <Text style={styles.col1}>Water:</Text>
                    <Text style={styles.col2}>{`${results.waterWeight}g`}</Text>
                </div>
                <div style={styles.row}>
                    <Text style={styles.col1}>Yeast:</Text>
                    <Text style={styles.col2}>{`${results.yeastWeight}g`}</Text>
                </div>
                <div style={styles.row}>
                    <Text style={styles.col1}>Salt:</Text>
                    <Text style={styles.col2}>{`${results.saltWeight}g`}</Text>
                </div>
                <div style={styles.row}>
                    <Text style={styles.col1}>Oil:</Text>
                    <Text style={styles.col2}>{`${results.oilWeight}g`}</Text>
                </div> */}

                {/* <div style={styles.buttons}>
                    <TouchableOpacity style={styles.button}
                    onPress = {previousPage}>
                        <Text style={styles.buttonText}>&lt;&lt; Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                    onPress = {nextPage}>
                        <Text style={styles.buttonText}>Start Over &gt;&gt;</Text>
                    </TouchableOpacity>
                </div> */}
                <p>Results here</p>
            </div>
            <Footer />
        </div>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white'
//     },
//     header: {
//         backgroundColor: 'green',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderBottomWidth: 10,
//         borderBottomColor: '#00ee00',
//         paddingTop: 20,
//         height: '20%'
//     },
//     labelText: {
//         color: 'black',
//         fontSize: 32,
//         padding: 2,
//         fontWeight: "500",
//     },
//     headerText: {
//         color: '#FFD700',
//         fontSize: 36,
//         padding: 26,
//         fontWeight: "500",
//     },
//     body: {
//         alignItems: 'center',
//         justifyContent: 'space-around',
//         height: '62%'
//     },
//     row: {
//         marginLeft: '15%',
//         flexDirection: 'row'
//     },
//     col1: {
//         flex: 1,
//         color: 'grey',
//         fontSize: 32,
//         padding: 2,
//         fontWeight: "500"
//     },

//     col2: {
//         flex: 1,
//         color: 'grey',
//         fontSize: 32,
//         padding: 2,
//         fontWeight: "bold"
//     },


//     buttons: {
//         flexDirection: 'row',
//         justifyContent: 'space-between'
//     },
//     button: {
//         paddingLeft: 15,
//         paddingRight: 15,
//         paddingTop: 7,
//         paddingBottom: 7,
//         backgroundColor: 'grey',
//         borderRadius: 20,
//         margin: 30
//     },
//     buttonText: {
//         fontSize: 26,
//         fontWeight: '500',
//         color: '#FFD700'
//     },
//     footer: {
//         backgroundColor: 'red',
//         borderTopWidth: 10,
//         borderTopColor: '#ff6666',
//         height: '18%'    
//     }
//   });

export default Results;