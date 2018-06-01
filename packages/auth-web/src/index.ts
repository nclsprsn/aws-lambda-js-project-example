import {APIGateway} from 'aws-sdk';
import { helloWorld } from './libs/log';
import {hello} from './1/helloworld'
import { Context, Callback, Handler } from 'aws-lambda';

const handler: Handler = (event, context: Context, callback: Callback) => {
    console.log(helloWorld)
    var test  = new APIGateway()
    console.log(test.apiVersions)
    var answer = {"result": event.key, "context": context};
    console.log(hello())
    callback(undefined, answer)
}

exports.handler = handler;
