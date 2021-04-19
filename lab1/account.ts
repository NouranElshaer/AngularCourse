class Account{
    Acc_no:number;
    Balance:number;
    debitAmount(){

    }
    creditAmount(){

    }
    getBalance(){

    }

}

interface IAccount{
    Date_of_opening:string;
    addCustomer();
    removeCustomer();
}

class Current_Account extends Account implements IAccount{
    Min_Balance:number;
    Date_of_opening:string;
    addCustomer(){
        throw new Error("Method not implemented.");

    }
    removeCustomer(){
        throw new Error("Method not implemented.");

    }


}
class Saving_Account extends Account implements IAccount{
    Interest_rate:number;
    Date_of_opening:string;
    addCustomer(){
        throw new Error("Method not implemented.");

    }
    removeCustomer(){
        throw new Error("Method not implemented.");

    }
}