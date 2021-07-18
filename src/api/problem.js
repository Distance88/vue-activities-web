// 引入刚刚封装的request
import request from '../utils/request'
const group_name = 'problem'
let data = {
    getProblemList(current) {
        return new request({
            url:`/${group_name}/getProblemList?current=`+current,
            method: 'post'
        })
    },
}
export default data