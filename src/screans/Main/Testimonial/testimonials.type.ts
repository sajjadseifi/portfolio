import { Rate } from "../../../@types/rate.type"
import { BaseUser } from "../../../@types/user.type"

export interface ITestimonial {
    master : BaseUser
    rate: Rate
    position : string
    team : string
    explain : string
}
