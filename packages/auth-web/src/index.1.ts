import { helloWorld } from './libs/log';
import { Context, Callback, Handler } from 'aws-lambda';

const handler: Handler = (event, context: Context, callback: Callback) => {
    console.log(helloWorld)
    var answer = {"result": event.key, "context": context};
    callback(undefined, answer)
}

exports.handler = handler;
