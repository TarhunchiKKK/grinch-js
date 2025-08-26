import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "src/shared/repository.util";
import { Post } from "./entities/post.entity";
import { CreatePostDto } from "./dto/create-post.dto";
import { posts } from "src/shared/data";

@Injectable()
export class PostsService {
    private porstRepository = new Repository<Post>(posts);

    public create(dto: CreatePostDto & { userId: string }) {
        return this.porstRepository.create({
            ...dto,
            createdAt: new Date()
        });
    }

    public findAllByUserId(userId: string) {
        return this.porstRepository
            .findAll(post => post.userId === userId)
            .sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1));
    }

    public findOne(id: string) {
        const post = this.porstRepository.findOne(id);

        if (!post) {
            throw new NotFoundException("Post not found");
        }

        return post;
    }

    public remove(id: string) {
        return this.porstRepository.remove(id);
    }
}
