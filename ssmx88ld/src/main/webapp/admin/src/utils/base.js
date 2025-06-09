const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmx88ld/",
            name: "ssmx88ld",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmx88ld/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "药店药品销售系统"
        } 
    }
}
export default base
