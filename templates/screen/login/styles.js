import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    login: {
        backgroundColor: '#c00',
        width: '90%',
        paddingVertical: 12,
        borderRadius: 10,
        left:20,
        top:600,
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
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        marginTop: 30
    },
    header: {
        backgroundColor: '#c00',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
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
        top: 50, // Ajuste conforme necessário para alinhar verticalmente com o texto
    },
});

export default styles;
