
export class Client {
   clientId: string;
   clientName: string;
}

export class Tier {
    tierId: string;
    tierName: string;
 }

 export class Team {
    teamId: string;
    teamName: string;
 }

 export class Menu {
    menuId: string;
    menuName: string;
 }
 
 export class Employee {
    userId: string;
    userName: string;
    password: string;
    isActive: boolean;
    siteLink: string;

    firstName: string;   
    middleName: string;
    lastName: string;
    emailAddress: string;
    location: string;
    tiers: Tier;
    teams: Team;
    clients: Client;
    menus: Menu;
}

export class Roles {
   roleId: string;
   name: string;
   description: string;
   leadership: boolean;
   clientId: boolean;
   clientName: boolean;
}