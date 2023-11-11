export const convertToSentence = (str) => {
    switch (str) {
        case 'DELIVERY':
            return 'Доставка карт и материалов';
        case 'TUITION':
            return 'Обучение агента';
        case 'DEPARTURE':
            return 'Выезд на точку для стимулирования выдач';
        case 'YESTERDAY':
            return 'Вчера'
        case 'LONG_AGO':
            return 'Давно'
        case 'HIGH':
            return 'Высокий';
        case 'MIDDLE':
            return 'Средний'
        case 'LOW':
            return 'Низкий'
        default:
            return '';
    }
}