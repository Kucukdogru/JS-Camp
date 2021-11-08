export class BaseLogger {
    log(data) {
        console.log("Default Logger " + data);
    }

    doSomething() {

    }
}

export class ElasticLogger extends BaseLogger {
    // BaseLogger 'daki log methodunu ezdim.
    log(data) {
        console.log("Logged to Elastic" + data);
    }
}

export class MongoLogger extends BaseLogger {
    log(data) {
        console.log("Logged to Mongo" + data);
    }
}