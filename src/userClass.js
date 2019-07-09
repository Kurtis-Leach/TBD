class UserHand extends Hand{

    static currentHand = []
    constructor(id){
        super(id)
        UserHand.currentHand.push(this)
    }

}