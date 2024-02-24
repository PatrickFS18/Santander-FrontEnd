import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F5F5',

    },
    login: {
        backgroundColor: '#c00',
        width: '90%',
        paddingVertical: 12,
        borderRadius: 10,
        left:20,
        top:'75%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize:15
    },

    remember: {
        flexDirection: 'row',
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: 'white',
        bottom: 7.5,
        right: 2
    },
    button: {
        backgroundColor: '#ccc', // Cor padrão quando não está checked
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        top: 65,
        right: -215,
        width: 50,
        height: 35
    }, checked: {
        backgroundColor: 'red', // Cor quando está checked
    },
    rememberCPF: {
        top: 70,
        left: 18
    },
    groupInput: {
        top: 50
    },
    line: {
        width: '90%',
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        right: -20,
        top: 25
    },
    titleText: {
        fontSize: 20,
        right: -20,
        top: 25

    },
    input: {
        right: -20,
        top: 25,
        fontSize: 16

    },
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: '400',
        top: -12,
        left:75,
        zIndex:1
    },
    header: {
        backgroundColor: '#c00',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 220,
        width: '100%' // Defina a altura do cabeçalho conforme necessário
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
    },
    gpsContainer: {
        position: 'absolute',
        right: 20,
        top: 50, // Ajuste conforme necessário para alinhar verticalmente com o texto
    },
    menuContainer: {
        position: 'absolute',
        left: 20,
        top: 43, // Ajuste conforme necessário para alinhar verticalmente com o texto
    },
    saldo: {
        backgroundColor: 'white',
        borderRadius: 5,
        width: '90%',
        height: 65,
        elevation: 2,
        position: 'absolute',
        marginStart: 20,
        marginEnd: 5,
        top: -60,
        justifyContent: 'center',
      },
    saldoText:{
        color:'black',
        left:40,
        fontSize:19
    },
    
});

export default styles;
