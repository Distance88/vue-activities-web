// 引入刚刚封装的request
import request from '../utils/request'
const group_name = 'comments'
let data = {
    getCommentsList(){
        return new request({
            url: `/${group_name}/getCommentsList`,
            method: 'post'
        })
    },
    addComments(params){
        return new request({
            url:`/${group_name}/addComments`,
            data:params,
            method:'post'
        })
    }
    
}
export default data