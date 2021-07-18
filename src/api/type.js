import request from '../utils/request'
const group_name = 'type'
let data={
    getTypeList(){
        return new request({
            url:`${group_name}/getTypeList`,
            method:'post'
        })
    }
}
export default data