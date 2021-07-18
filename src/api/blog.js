import request from '../utils/request'
const group_name = 'blog'
let data = {
    getBlogList(current){
        return new request({
            url:`${group_name}/getBlogList?current=`+current,
            method:'post'
        })
    },
    getBlogListByType(params){
        return new request({
            url:`${group_name}/getBlogListByType`,
            data:params,
            method:'post'
        })
    },
    getBlogListByLabel(params){
        return new request({
            url:`${group_name}/getBlogListByLabel`,
            data:params,
            method:'post'
        })
    },
    getBlogById(id){
        return new request({
            url:`${group_name}/getBlogById?id=`+id,
            method:'post'
        })
    },
    getRecommendList(){
        return new request({
            url:`${group_name}/getHotBlog`,
            method:'post'
        })
    },
    getBlogListByUserId(params){
        return new request({
            url:`${group_name}/getBlogListByUserId`,
            data:params,
            method:'post'
        })
    }
}
export default data