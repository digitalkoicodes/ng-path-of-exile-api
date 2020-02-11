import { Model } from './model';

export class League extends Model {
    id: string = null;
    realm: string = null;
    url: string = null;
    startAt: string = null;
    endAt: string = null;
    delveEvent: boolean = false;
}