import firstChannelImage from '../../../assets/icon/1st.png';
import secondChannelImag from '../../../assets/icon/2x2.png';
import thirdChannelImage from '../../../assets/icon/rbk.png';
import fourthChannelImage from '../../../assets/icon/amedia.png';

let channels = [
    {
        image: firstChannelImage,
        channelName: 'Первый канал',
        firstTranslation: '13:00 Новости с субтитрами', 
        secondTranslation: '14:00 Давай поженимся', 
        thirdTranslation: '15:00 Другие новости'
    },
    {
        image: secondChannelImag,
        channelName: '2x2',
        firstTranslation: '13:00 МУЛЬТ ТВ. Сезон 4, 7 серия', 
        secondTranslation: '14:00 ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия', 
        thirdTranslation: '15:00 БУРДАШЕВ. Сезон 1, 20 серия'
    },
    {
        image: thirdChannelImage,
        channelName: 'РБК',
        firstTranslation: '13:00 ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС', 
        secondTranslation: ' 14:00 ДЕНЬ. Главные темы', 
        thirdTranslation: '15:00 Главные новости'
    },
    {
        image: fourthChannelImage,
        channelName: 'AMEDIA PREMIUM',
        firstTranslation: '13:00 Клиент всегда мёртв', 
        secondTranslation: '14:00 Голодные игры: Сойка-пересмешница. Часть I', 
        thirdTranslation: '15:00 Секс в большом городе'
    },
]

export default channels;