import { Item } from './Item';

export interface FlickerResponse {
    title: string;
    link: string;
    description: string;
    modified: Date;
    generator: string;
    items: Item[];
}
