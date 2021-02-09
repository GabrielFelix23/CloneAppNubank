import React from 'react'
import {View, Text, Image, ScrollView} from 'react-native'
import Styles from '../Partials/Styles/StylesIndex'

export default class Index extends React.Component{
    state = {
        name: 'Gabriel'
    }
    
    render(){
        return(
            <View style={Styles.Wallpaper}>
                <View style={Styles.container}>
                    
                    <View style={Styles.containerLogo}>
                        <Image
                            style={Styles.logo}
                            source={require("../Partials/Images/logo.png")}
                        />

                        <Text style={Styles.font}>{this.state.name}</Text>
                    </View>

                    <View style={Styles.containerFlexDown}>
                        <Image
                            style={Styles.flexDown}
                            source={require("../Partials/Images/flexDown.png")}

                        />
                    </View>

                    <View style={Styles.containerScrow}>
                        
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={Styles.containerMain}>

                                <View style={Styles.main}>
                                        
                                        <View style={Styles.barGreen}></View>

                                        <View style={Styles.containerCard}>
                                            <Image
                                                style={Styles.imgCard}
                                                source={require("../Partials/Images/card.png")}
                                            />
                                            <Text style={Styles.textCart}>Cartão de crédito</Text>
                                        </View>

                                        <View style={Styles.containerCredit}>
                                            <Text style={Styles.textCreditTitle}>FATURA ATUAL</Text>
                                            <Text style={Styles.textCredit}>R$ <Text style={Styles.textCreditColor}>0</Text>,00</Text>
                                            <Text style={Styles.textCreditLimit}>Limite disponível <Text style={Styles.textCreditLimitColor}>R$ 9,999,999,99</Text></Text>
                                        </View>

                                        <View style={Styles.containerMainFooter}>
                                
                                            <Text style={Styles.textMainFooter}>Aguardando a sua primeira compra com o cartão.</Text>
                                
                                            <View style={Styles.containerImgImgflexRight}> 
                                                <Image
                                                    style={Styles.imgflexRight}
                                                    source={require("../Partials/Images/flexRight.png")}
                                                />
                                            </View> 
                                        </View>
                                </View>
                            </View>

                            <View style={Styles.containerMain}>
                                    <View style={Styles.main}>
                                        <View style={Styles.containerAccount}>
                                            <Image
                                                style={Styles.imgMoney}
                                                source={require("../Partials/Images/money.png")}    
                                            />

                                            <Text style={Styles.textAccount}>Conta</Text>
                                            
                                            <Image
                                                style={Styles.imgMoney}
                                                source={require("../Partials/Images/preview.png")}    
                                            />
                                        </View>

                                        <View style={Styles.containerBalance}>
                                            <Text style={Styles.textBalance}>Saldo disponível</Text>    
                                            <View style={Styles.input}></View>
                                        </View>

                                        <View style={Styles.containerMainFooter}>
                                            <Image
                                                style={Styles.imgProfile}
                                                source={require("../Partials/Images/profile.png")}
                                            />

                                            <Text style={Styles.textMainFooter}>Conecte sua lista de contatos e simplifique ainda mais sua vida financeira.</Text>
                                
                                            <View style={Styles.containerImgImgflexRight}> 
                                                <Image
                                                    style={Styles.imgflexRight}
                                                    source={require("../Partials/Images/flexRight.png")}
                                                />
                                            </View> 
                                        </View>
                                    </View>
                                </View>

                            <View style={Styles.containerMain}>
                            <View style={Styles.main}>
                                <View style={Styles.containerRewards}>
                                    <Image
                                        style={Styles.imgGiftbox}
                                        source={require("../Partials/Images/giftbox.png")}
                                    />
                                    <Text style={Styles.titleRewards}>Nubank Rewards</Text>
                                    <Text style={Styles.textRewads}>Acumule pontos que nunca expiram e troque por passagens aéreas ou serviços que você realmente usa.</Text>

                                    <View style={Styles.buttonRewards}>
                                        <Text style={Styles.textButtonRewards}>ATIVE O SEU REWARDS</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        </ScrollView>
                   
                    </View>
                </View>  


                <View style={Styles.containerNavFooter}>
                    <ScrollView 
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}>
                        
                        <View style={Styles.containerNav}>
                            <View style={Styles.navFooter}>
                                <View style={Styles.containerImgProfile}>
                                    <Image
                                        style={Styles.ImgProfile}
                                        source={require("../Partials/Images/profileFooter.png")}
                                    />
                                    <Text style={Styles.textProfile}>Indicar um amigo</Text>
                                </View>
                            </View>
                        </View>

                        <View style={Styles.containerNav}>
                            <View style={Styles.navFooter}>
                                <View style={Styles.containerImgProfile}>
                                    <Image
                                        style={Styles.ImgPhoneProfile}
                                        source={require("../Partials/Images/phone.png")}
                                    />
                                    <Text style={Styles.textProfilePhone}>Recarga de celular</Text>
                                </View>
                            </View>
                        </View>

                        <View style={Styles.containerNav}>
                            <View style={Styles.navFooter}>
                                <View style={Styles.containerImgProfile}>
                                    <Image
                                        style={Styles.ImgProfile}
                                        source={require("../Partials/Images/moneyFooter.png")}
                                    />
                                    <Text style={Styles.textProfile}>Cobrar</Text>
                                </View>
                            </View>
                        </View>

                        <View style={Styles.containerNav}>
                            <View style={Styles.navFooter}>
                                <View style={Styles.containerImgProfile}>
                                    <Image
                                        style={Styles.ImgProfile}
                                        source={require("../Partials/Images/Donation.png")}
                                    />
                                    <Text style={Styles.textProfile}>Doação</Text>
                                </View>
                            </View>
                        </View>

                        <View style={Styles.containerNav}>
                            <View style={Styles.navFooter}>
                                <View style={Styles.containerImgProfile}>
                                    <Image
                                        style={Styles.ImgProfile}
                                        source={require("../Partials/Images/deposit.png")}
                                    />
                                    <Text style={Styles.textProfile}>Depositar</Text>
                                </View>
                            </View>
                        </View>
               
                    </ScrollView>
                </View>
            </View>
        )
    }
}
