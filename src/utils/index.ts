/** Сократить email для ника пользователя если его нет */
export const sliceEmail = (email: string | null) => {
    return !email ? false : email.charAt(0).toUpperCase() + email.split('@')[0].slice(1)
}

/** Существует ли строка? Если нет, то возращает дефолтное значение */
export const stringExists = (item: string) => item && item !== "NaN" ? item : "Неизвестно";

/** Поиск определенного значения в строке */
export const searchValue = (value: string): string => {
    const start_pos = value.indexOf('search') + 7;
    const end_pos = value.indexOf('&', start_pos);
    const res = value.substring(start_pos, end_pos)
    if (res.indexOf('+') !== -1) {
        return res.replaceAll('+', ' ');
    }
    return value.substring(start_pos, end_pos)
}

/** Конвертация серверных данных под клиента */
export const characterConverter = (response: CharacterApi): CharacterCustomElement[] => {
    return response.docs.map((el: CharacterApiElement) => ({
        id: el._id,
        birth: el.birth,
        death: el.death,
        gender: el.gender,
        hair: el.hair,
        name: el.name,
        race: el.race,
        realm: el.realm,
        spouse: el.spouse,
        wikiUrl: el.wikiUrl,
        like: false,
    }))
}

/** Конвертация серверных данных под клиента */
export const quoteConverter = (response: QuoteApi): QuoteCustomElement[] => {
    return response.docs.map((el: QuoteApiElement) => ({
        id: el._id,
        dialog: el.dialog,
        movie: el.movie,
        character: el.character
    }))
}
