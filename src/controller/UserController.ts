import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"

export class UserController {

    private static userRepository = AppDataSource.getRepository(User)


    static async getAllUsers(request: Request, response: Response, next: NextFunction) {
        try {
            const users = await UserController.userRepository.find();
            return response.json(users);
        } catch (error) {
            return response.status(500).json({ error: "Failed to fetch users." });
        }
    }

    static async getUserById(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id);
        try {
            const user = await UserController.userRepository.findOne({
                where: { id }
            })
            if (!user) {
                return response.status(404).json("Unregistered user");
            }
            return response.json(user);
        } catch (error) {
            return response.status(500).json({ error: "Failed to fetch user." });
        }
    }

    static async registerUser(request: Request, response: Response, next: NextFunction) {
        const { firstName, lastName, age, email, role } = request.body;

        const user = Object.assign(new User(), {
            firstName,
            lastName,
            age,
            email,
            role
        });

        try {
            const savedUser = await UserController.userRepository.save(user);
            return response.json(savedUser);
        } catch (error) {
            return response.status(500).json({ error: "Failed to register user." });
        }
    }



}