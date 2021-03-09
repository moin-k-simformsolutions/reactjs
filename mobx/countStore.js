import {observable,action, makeObservable} from "mobx";

class CountStore{
    totalCount=0;

    constructor(totalCount){
        makeObservable(this,{
            totalCount:observable,
            increseCount:action,
            decreseCount:action,
            reset:action
        });
        // this.totalCount=totalCount;
    }


    increseCount(by=1){
        this.totalCount=this.totalCount+by;
    }

    decreseCount(by=1){
        this.totalCount=this.totalCount-by;
    }

    reset(){
        this.totalCount=0;
    }
}

const storeInstance=new CountStore();

export default storeInstance;