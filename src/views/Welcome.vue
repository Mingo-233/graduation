<template>
  <div v-title data-title="首页">
    <h1>這是首頁</h1>
    <button @click="handle">click</button>
    <button type="button" class="btn btn-primary" v-on:click="getPdf()">
      导出PDF
    </button>
    <div
      class="row"
      id="pdfDom"
      style="padding-top: 1px; background-color: #fff"
    >
      <h4>hhhhhhh</h4>
      <h4>oooooooo</h4>
      div.div${$}*3
      <div>1</div>
      <div>2</div>

      <div>37</div>

      <img src="@/assets/ccc.jpg" alt="" />
      <div>38</div>
      <img src="@/assets/ccc.jpg" alt="" />
      <div>38</div>
      <img src="@/assets/ccc.jpg" alt="" />
      <div>38</div>
      <img src="@/assets/ccc.jpg" alt="" />
      <div>38</div>
      <img src="@/assets/ccc.jpg" alt="" />
      <div>38</div>

      <div>47</div>
      <div>48</div>
      <div>49</div>
      <div>50</div>
      <!-- 给自己需要导出的ui部分.定义id为"pdfDom".此部分将就是pdf显示的部分 -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      htmlTitle: "文件名",
    };
  },
  methods: {
    handle() {
      this.$router.push({ name: "basics", params: { money: 123 } });
    },
  },
};
</script>
<style scoped>
</style>
