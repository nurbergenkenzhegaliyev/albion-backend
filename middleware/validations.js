import { body } from "express-validator";

export const registerValidation = [
  body("username", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен быть минимум 5 сиволов").isLength({ min: 5 }),
];

export const loginValidation = [
  body("username", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен быть минимум 5 сиволов").isLength({ min: 5 }),
];
