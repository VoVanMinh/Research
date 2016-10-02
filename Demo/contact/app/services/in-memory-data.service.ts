import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let contacts = [
            { id: 1, name: 'Adolf Hitler', phone: '0900000001' },
            { id: 2, name: 'Abraham Lincoln', phone: '0900000002' },
            { id: 3, name: 'Anonymous', phone: '0900000003' },
            { id: 4, name: 'Albert Einstein', phone: '0900000004' },
            { id: 5, name: 'Alan Turing', phone: '0900000005' },
            { id: 6, name: 'Alexander', phone: '0900000006' }
        ];
        return { contacts };
    }
}
