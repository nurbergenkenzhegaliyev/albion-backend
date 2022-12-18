import { body } from "express-validator";

export const registerValidation = [
  body("username", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен быть минимум 8 сиволов").isLength({ min: 8 }),
  body("password", "Пароль должен быть максимум 20 сиволов").isLength({ max: 20 }),
];

export const loginValidation = [
  body("username", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен быть минимум 8 сиволов").isLength({ min: 8}),
  body("password", "Пароль должен быть максимум 20 сиволов").isLength({ max: 20 }),
];
