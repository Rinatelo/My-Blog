import { body } from "express-validator";

export const registerValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть не менее шести символов').isLength({ min: 6 }),
    body('fullName', 'Укажите имя не менее трёх символов ').isLength({ min: 3 }),
    body('avatarUrl', 'Неверная ссылка на аватар').optional().isURL(),
];