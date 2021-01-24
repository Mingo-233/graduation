export const tableMixin = {
    data() {
        return {
            // collegesName: [],
            // classesName: [],
            // formModel: {
            //     college: '',
            //     major: []
            // }
        }
    },
    methods: {
        // async getCollegeName() {
        //     const { data } = await this.$get('formData/collegeNames')
        //     this.collegesName = data
        // },
        // async getClassesName(college) {
        //     const { data } = await this.$get('formData/majorClasses', {
        //         collegeName: college
        //     })
        //     this.formModel.major = []
        //     this.classesName = data
        // },
        // async onSubmit(url, Qnumber, optionName) {
        //     if (this.formModel.major.length === 0) {
        //         this.$message({
        //             type: 'warning',
        //             message: "请先选择查询专业",
        //         });
        //         return
        //     }
        //     const params = {
        //         colleges: this.formModel.college,
        //         classes: this.formModel.major,
        //         Qnumber: Qnumber,
        //         percentage: 4
        //     }
        //     const { data } = await this.$get(url, params)
        //     //去除该属性双向绑定特性
        //     params.classes = JSON.parse(JSON.stringify(params.classes))
        //     params.classes.unshift('学院平均指数')
        //     let settingOption = params.classes.map((item, index) => {
        //         return {
        //             name: item,
        //             type: "bar",
        //             data: data[index]
        //         }
        //     })
        //     this[optionName].legend.data = params.classes
        //     this[optionName].series = settingOption
        //     //重置echart图表选择呈现数据
        //     this[optionName].legend.selected = {}
        // },
        // clearMajor() {
        //     this.formModel.major = []
        // }
    },
    // mounted() {
    //     this.getCollegeName()
    // }
}