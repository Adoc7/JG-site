export class Technologie {
    id: number;
    name: string;
    modal: string;
    path: string;


constructor(
    id = 0,
    name = '',
    modal = '',
    path = '')
    {
        this.id = id;
        this.name = name;
        this.modal = modal;
        this.path = path;
    }
}