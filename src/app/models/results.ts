export interface Clientresult {
  numero: number;
  code: string;
  montant: number;
  siteresultList: Siteresult[];

}

export interface Siteresult {
  numero: number;
  code: string;
  montant: number;

}


export interface Familleresult{
  code: string;
  montant: number;
  articleresultList;
}



export interface Articleresult {
  numero: number;
  code: string;
  montant: number;
  nom:string;

}

