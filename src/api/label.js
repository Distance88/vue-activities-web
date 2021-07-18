import request from '../utils/request'
const group_name = 'label'
let data = {
    getLabelList(){
        return new request({
            url:`${group_name}/getLabelList`,
            method:'post'
        })
    },
}
export default data