import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    //Body
    container:{
        flex: 1,
        alignItems: "center"
    },
    Wallpaper:{
        flex: 1,
        backgroundColor: '#80289A'
    },

    //Logo
    containerLogo:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 60
    },
    logo:{
        marginRight: 7,
        width: 40,
        height: 30
    },
    font:{
        fontSize: 25,
        color: '#fff',
        fontWeight: "bold"
    },
    containerFlexDown:{
        marginTop: 10,
        marginBottom: 20
    },
    flexDown:{
        width: 15,
        height: 15
    },
    //Main
    containerScrow:{
        width: 300,
        height: 330,
    },
    containerMain:{
        marginBottom: 20,
        flexDirection: "row"
    },
    main:{
        backgroundColor: "#fff",
        width: 300,
        height: 330,
        borderRadius: 2
    },
    containerMainFooter:{
        backgroundColor: '#F7F7F7',
        width: '100%',
        height: 90,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    textMainFooter:{
       margin:30,
       paddingRight: 30,
       paddingLeft: -10
    },
    containerImgImgflexRight:{
        marginLeft: -30
    },
    imgflexRight:{
        width: 12,
        height: 12,
        marginLeft: -44
    },
    imgProfile:{
        width: 20,
        height: 20,
        marginLeft:20,
        marginRight: -10
    },
    //Card credit Body 
    containerCard:{
        margin: 30,
        flexDirection: "row",
        alignItems: "center",
    },
    imgCard:{
        width: 30,
        height: 30,
        marginRight:20
    },
    textCart:{
        fontSize: 16
    },  
    containerCredit:{
        margin: 30,
        marginTop: 15, 
        marginBottom: 50
    },
    textCreditTitle:{
        color: "#01B8C6",
        fontWeight: "bold",
        fontSize: 15
    },
    textCredit:{
        color: "#01B8C6",
        fontSize: 45
    },
    textCreditColor:{
        fontWeight: "bold"
    },
    textCreditLimit:{
        fontSize: 16,
        marginBottom: 5
    },
    textCreditLimitColor:{
        color: '#9ED230',
        fontWeight: "bold"
    },  
    barGreen:{
        backgroundColor: "#9ED230",
        width: 10,
        height: 246,
        marginLeft: '97%',
        marginBottom: '-83%',
        borderRadius: 2
    },  
    //Account body
    containerAccount:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 30
    },
    imgMoney:{
        width: 30,
        height: 30,
    },
    textAccount:{
        fontSize: 16,
        marginRight: 100
    },
    containerBalance:{
        margin: 30
    },
    textBalance:{
        fontSize: 18
    },
    input:{
        backgroundColor: '#F7F7F7',
        width: 200,
        height: 40,
        borderRadius: 2,
        marginTop: 5,
        marginBottom: 28
    },
    
    //Rewards Body
    containerRewards:{
        flex: 1,
        alignItems: "center",
        margin: 25
    },
    imgGiftbox:{
        width: 30,
        height: 30,
        marginBottom: 20
    },
    titleRewards:{
        fontSize: 25,
        fontWeight: "bold",
    },
    textRewads:{
        margin: 13,
        textAlign: "center",
        fontSize: 16,
    },
    buttonRewards:{
        marginTop: 90,
        borderWidth: 1.3,
        borderColor: '#80289A',
        width: 200,
        height: 50,
        borderRadius: 3,
        alignItems: "center",
        justifyContent: "center"
    },
    textButtonRewards:{
        fontSize: 13,
        fontWeight: "bold",
        color: '#80289A',
    },

    //FooterNav
    containerNavFooter:{
        marginLeft: 30,
        marginTop: 20,
        marginBottom: 15,
    },
    containerNav:{
        marginRight: 10
    },
    navFooter:{
        backgroundColor: 'rgba(200,200,200, 0.3)',
        width: 100,
        height: 100,
        borderRadius: 6
    },
    //Profile
    containerImgProfile:{
        flex: 1,
        alignItems: "flex-start"
    },
    ImgProfile:{
        width: 30,
        height: 30,
        margin: 5,
    },
    textProfile:{
        textAlign: "center",
        fontSize: 13,
        color: "#fff",
        marginTop: 30,
        margin: 5
    },
    ImgPhoneProfile:{
        width: 35,
        height: 35,
        margin: 5
    },
    textProfilePhone:{
        textAlign: "left",
        fontSize: 13,
        color: "#fff",
        marginTop: 20,
        margin: 5,
    },
})