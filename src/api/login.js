// 引入刚刚封装的request
import request from '../utils/request'
const group_name = 'user'
let data = {
    login(user) {
        return new request({
            url: `/${group_name}/login`,
            data:user,
            method: 'post'
        })
    },
}
export default data