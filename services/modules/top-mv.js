import { axRequest } from '../index'

export const getTopMv = (offset = 0, limit = 20) => {
    return axRequest.get({
        url: '/top/mv',
        data: {
            limit,
            offset
        }
    })
}