import { faker } from '@faker-js/faker';

export default function messageGenerator(count = 1) {
    const messages = [];
    do {
        messages.push({
            type: Boolean(Math.round(Math.random())) ? 'recive' : 'sent',
            message: faker.lorem.sentence(),
            time: faker.date.recent().toLocaleTimeString()
        })
        count--;
    } while (count)

    return messages;
}