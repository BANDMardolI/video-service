import comediesIcon from '../../../assets/icon/smile.png';
import dramasIcon from '../../../assets/icon/cry.png';
import fantasyIcon from '../../../assets/icon/alien.png';
import horrorsIcon from '../../../assets/icon/ghost.png';


let genres = [
    {
        icon: comediesIcon,
        title: 'Комедии',
        path: '/comedies',
        itemClass: ' comedies_bg'
    },
    {
        icon: dramasIcon,
        title: 'Драмы',
        path: '/dramas',
        itemClass: ' dramas_bg'
    },
    {
        icon: fantasyIcon,
        title: 'Фантастика',
        path: '/fantasy',
        itemClass: ' fantasy_bg'
    },
    {
        icon: horrorsIcon,
        title: 'Ужасы',
        path: '/horrors',
        itemClass: ' horrors_bg'
    }
]

export default genres;