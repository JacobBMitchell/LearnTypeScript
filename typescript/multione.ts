export 
class jump {
    static hop():void { // when called from class
        console.log("hop");
    }
    hop():void{ //when made an object
        console.log("hop!");
    }
}

export
class run {
    static sprint(speed: number):string{
        return `I run at ${speed} mph!`
    }
}

export
type Man = {
    firstName: string,
    lastName: string
}

//jump.hop();