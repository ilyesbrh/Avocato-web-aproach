export interface user {
    username?: string;
    password?: string;
    privilege?: Array<string>;
    token?: string;
}

export enum affairTypes {
    type1 = 1,
    type2 = 2,
    type3 = 3,
    type4 = 4,
    type5 = 5,
    type6 = 6,
    type7 = 7,
    type8 = 8,
    type9 = 9,
    type10 = 10,
};
export interface affair {
    numero?: Number,
    type?: string,
    name?: string,
    favorite?: boolean;
    state?: string;
    tribunal?: string;
    created_at: Date;
    audience?: [
        {
            place?: string;
            date?: Date;
            description?: string;
            alerts: Array<alert>;
        }
    ];
    requritments?: Array<{
        client?: persone;
    }>;
    Accusations?: Array<{
        advairsaire?: persone;
        defence?: persone;
    }>;
    caisse?: {
        frais?: Number;
        dette?: Array<{
            montant?: Number;
            description?: string;
        }>,
        versement?: Array<{
            montant?: Number;
            description?: string;
        }>
    };
    supports?: Array<support>;
    description?: string;
}

export interface persone {
    role?: string;
    nom?: string;
    prenom?: string;
    telephone?: string;
    email?: string;
    description?: string;
}
export interface support {
    type?: string,
    destination?: string,
    alerts?: Array<alert>,
    Attachements?: Array<{
        name: string,
        description: string,
        file: string,
        type: string,
    }>
}
export interface alert {
    name: ""
    date: ""
}