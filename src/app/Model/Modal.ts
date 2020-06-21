export class Modal {
    id: number;
    id_modal: string;
    title: string;
    path1: string;
    path1_name: string;
    path2: string;
    path2_name: string;
constructor(
    id = 0,
    id_modal = '',
    title = '',
    path1 = '',
    path1_name = '',
    path2 = '',
    path2_name = '',)
    {
        this.id = id;
        this.id_modal = id_modal;
        this.title = title;
        this.path1 = path1;
        this.path1_name = path1_name;
        this.path2 = path2;
        this.path2_name = path2_name;
    }
}
