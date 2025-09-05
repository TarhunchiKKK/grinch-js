import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "src/shared/repository.util";
import { User } from "./entities/user.entity";
import { users } from "src/shared/data";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
    private usersRepository: Repository<User>;

    public constructor() {
        this.usersRepository = new Repository(users);
    }

    public create(dto: CreateUserDto) {
        return this.usersRepository.create({
            ...dto,
            createdAt: new Date()
        });
    }

    public findOne(id: string) {
        const user = this.usersRepository.findOne(id);

        if (!user) {
            throw new NotFoundException("User not found");
        }

        return user;
    }

    public findOneByEmail(email: string) {
        return this.usersRepository.findBy(user => user.email === email);
    }

    public update(id: string, dto: UpdateUserDto) {
        const user = this.usersRepository.findOne(id);

        if (!user) {
            throw new NotFoundException("User not found");
        }

        this.usersRepository.update(id, dto);
    }

    public remove(id: string) {
        this.usersRepository.remove(id);
    }
}
