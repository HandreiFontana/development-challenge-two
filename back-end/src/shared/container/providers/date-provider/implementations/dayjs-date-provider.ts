import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc'
import { IDateProvider } from "../i-date-provider"


dayjs.extend(utc)

class DayjsDateProvider implements IDateProvider {
    addDays(days: number): Date {
        return dayjs().add(days, 'days').toDate()
    }
}

export { DayjsDateProvider }