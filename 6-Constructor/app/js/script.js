const headerButton = document.querySelector('.header__button');

const settings = [
    {
        type: "language",
        title: "Мова сторінки"
    },
    {
        type: "header-position",
        title: "Зміна розташування блоку header" 
    },
    {
        type: 'change-password',
        title: "Зміна паролю адміністратора"
    },
    {
        type: 'theme',
        title: "Зміна теми"
    },
    {
        type: "constructor",
        title: "Додати елементи на сторінку"
    }
]


headerButton.onclick = () => {
    const headerSettings = document.querySelector('.header__settings');

    settings.forEach((element) => {
        const containerSetting = document.createElement('div');
        containerSetting.className = "setting";
        const settingTitle = document.createElement('h1');
        settingTitle.textContent = element.title;

        containerSetting.append(settingTitle);
        headerSettings.append(containerSetting);
    })
    headerButton.onclick = null;
}