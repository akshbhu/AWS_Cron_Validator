import {CronExpression} from './cronExpression'
const cron = '* * * * * *' ;
console.log('helloworld');
console.log(isValidCronExpression(cron));


export function isValidCronExpression(cronExpression: string): boolean {
    try {
        new CronExpression(cronExpression);
        return true;
    } catch (e) {
        return false;
    }
}