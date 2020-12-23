export const myMixin = {
    data() {
        return {
            rules: {
                sex: [
                    { required: true, message: "您还有未选择的选项", trigger: "change" },
                ],
                age: [
                    { required: true, message: "您还有未选择的选项", trigger: "change" },
                ],
                grade: [
                    { required: true, message: "您还有未选择的选项", trigger: "change" },
                ],
                school: [
                    { required: true, message: "您还有未选择的选项", trigger: "change" },
                ],
                college: [
                    { required: true, message: "您还有未选择的选项", trigger: "change" },
                ],
                major: [
                    { required: true, message: "您还有未选择的选项", trigger: "change" },
                ],
                StudentID: [
                    { required: true, message: "您还有未选择的选项", trigger: "change" },
                ],
                profession: [
                    { required: true, message: "您还有未选择的选项", trigger: "change" },
                ],
            },
            // 进度条
            percentage: 0,
            customColor: "#409eff",
            customColors: [
                { color: "#f56c6c", percentage: 20 },
                { color: "#e6a23c", percentage: 40 },
                { color: "#5cb87a", percentage: 60 },
                { color: "#1989fa", percentage: 80 },
                { color: "#6f7ad3", percentage: 100 },
            ],
            //职业选项数组
            professionArray: [
                "国家与社会管理者",
                "企业经理人员",
                "私营企业主",
                "专业人士与技术人员",
                "办事人员阶层",
                "个体工商户阶层",
                "商业服务人员阶层",
                "产业工人阶层",
                "农业劳动者阶层",
                "城市无业、失业和半失业人员阶层",
            ],
        }
    }
}