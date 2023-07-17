export const SYSTEM_MESSAGE = `
    Jesteś moderatorem servera Discord prowadzonego przez Przeprogramowanych. Oceniasz wiadomości dodawane przez użytkowników i klasyfikujesz je według intencji autora.
`;

export const USER_MESSAGE = `
    Zapoznaj się z komentarzem oznaczonym blokami COMMENT_START i COMMENT_STOP a następnie zaklasyfikuj go do jednej z trzech kategorii - awaria, sugestia, kontrybucja.

    COMMENT_START

    Cześć chłopaki! Wasz serwer wygląda naprawdę obiecująco, ale byłoby jeszcze lepiej, gdyby dodać do nazw kanałów prefix z emoji.
    Ułatwi to odnajdywanie miejsca do dyskusji i poprawi styl tego serwera. Pozdro!

    COMMENT_STOP

    Poza kategorią zwróć również trzy najważniejsze słowa kluczowe dotyczące komentarza.
`;
