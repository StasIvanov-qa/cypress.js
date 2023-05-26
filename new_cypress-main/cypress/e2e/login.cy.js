describe('Тестирование формы логина и пароля', function () {
 it('Проверка правильного логина и пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.contains('Авторизация прошла успешно')
    cy.get('#exitMessageButton > .exitIcon')
 })
 it('Проверка логики востановления пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('german@dolnikov.ru');
    cy.get('#restoreEmailButton').click();
    cy.contains('Успешно отправили пароль на e-mail')
    cy.get('#exitMessageButton > .exitIcon')
 })
 it('Проверка  не правильного пароля и правильного логина', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio2');
    cy.get('#loginButton').click();
    cy.contains('Такого логина или пароля нет')
    cy.get('#exitMessageButton > .exitIcon')
})
it('Проверка  не правильного логина и правильного пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikow.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.contains('Такого логина или пароля нет')
    cy.get('#exitMessageButton > .exitIcon')
})
it('Проверка на отсутствие @ в логине ожидаю ошибку', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germandolnikow.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.contains('Нужно исправить проблему валидации')
    cy.get('#exitMessageButton > .exitIcon')
})
it('Проверка на приведение к строчным буквам', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.contains('Авторизация прошла успешно')
    cy.get('#exitMessageButton > .exitIcon')
 })

})
