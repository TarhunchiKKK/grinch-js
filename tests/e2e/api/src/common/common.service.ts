import { Injectable } from "@nestjs/common";
import { faker } from "@faker-js/faker";

@Injectable()
export class CommonService {
    public simple() {}

    public medium() {}

    public hardTask() {
        const length = 300_000;
        const strings: string[] = [];

        for (let i = 0; i < length; i++) {
            strings.push(faker.string.alphanumeric({ length: 100 }));
        }

        strings.sort((a, b) => (a < b ? -1 : 1));
    }
}
