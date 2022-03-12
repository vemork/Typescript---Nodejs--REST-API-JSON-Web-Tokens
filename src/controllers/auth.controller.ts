import jwt from "jsonwebtoken";

import { Request, Response } from "express";
import User, { IUser } from "../models/Users";

export const signup = async (req: Request, res: Response) => {
  // console.log('req.bodyyyyy :>> ', req.body)

  const user: IUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  const encryptedPasswrod = await user.encryptPassword(req.body.password);
  user.password = encryptedPasswrod;

  user.encryptPassword(req.body.password);
  const savedUser = await user.save();

  const token = jwt.sign(
    { _id: savedUser._id },
    process.env.TOKEN_SECRET || "tokentest"
  );

  // console.log(
  //   "🚀 ~ file: auth.controller.ts ~ line 13 ~ signup ~ savedUser",
  //   savedUser
  // );
  // console.log("🚀 ~ file: auth.controller.ts ~ line 11 ~ signup ~ user", user)
  // res.send('signup')
  // res.json({ token })
  res.header("auth-token", token).json(savedUser);
};

export const signin = async (req: Request, res: Response) => {
  // console.log(req.body)
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json("Email or password incorrect ...");

  const isValidPassword = await user.validatePassword(req.body.password);
  if (!isValidPassword)
    return res.status(400).json("Email or password incorrect ...");

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET || "token_test", {
    expiresIn: 60 * 60 * 24,
  });

  // res.send("login");
  res.header("auth-token", token).json(user);
};

export const profile = async (req: Request, res: Response) => {
  // console.log('req.header("auth-token")', req.header('auth-token'))
  const user = await User.findById(req.userId, {password: 0})
  if (!user) return res.status(404).json('User not found.')
  // res.send("profile");
  res.status(200).json(user)
};
