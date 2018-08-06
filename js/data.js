export function getMainData() {
    return [
        {
            title: 'Philips Cooler',
            message: 'Начнет охлаждать в 16:30',
            icon: 'assets/icons/temperature_grey.png'
        },
        {
            title: 'Xiaomi Yeelight LED Smart Bulb',
            message: 'Включится в 17:00',
            icon: 'assets/icons/sun_grey.png'
        }
    ];
}

export function getScenariosData() {
    return [
        {
            title: 'Выключить весь свет в доме и во дворе',
            icon: 'assets/icons/sun_yellow.png'
        },
        {
            title: 'Я ухожу',
            icon: 'assets/icons/scheduled.png'
        },
        {
            title: 'Включить свет в коридоре',
            icon: 'assets/icons/sun_yellow.png'
        },
        {
            title: 'Набрать горячую ванну',
            message: 'Начнётся в 18:00',
            icon: 'assets/icons/temperature_yellow.png'
        },
        {
            title: 'Сделать пол тёплым во всей квартире',
            icon: 'assets/icons/temperature_yellow.png'
        }
    ];
}

export function getDevicesData() {
    return [
        {
            title: 'Xiaomi Yeelight LED Smart Bulb',
            message: 'Включено',
            icon: 'assets/icons/sun_yellow.png',
            template: 3
        },
        {
            title: 'Xiaomi Warm Floor',
            message: 'Включится в 17:00',
            icon: 'assets/icons/temperature_yellow.png',
            template: 0
        },
        {
            title: 'Elgato Eve Degree Connected',
            message: 'Выключено до 17:00',
            icon: 'assets/icons/temperature_grey.png',
            template: 1
        },
        {
            title: 'LIFX Mini Day & Dusk A60 E27',
            message: 'Включится в 17:00',
            icon: 'assets/icons/sun_grey.png',
            template: 3
        },
        {
            title: 'Xiaomi Mi Air Purifier 2S',
            message: 'Включено',
            icon: 'assets/icons/temperature_yellow.png',
            template: 0
        },
        {
            title: 'Philips Zhirui',
            message: 'Выключено',
            icon: 'assets/icons/temperature_grey.png',
            template: 1
        }
    ];
}