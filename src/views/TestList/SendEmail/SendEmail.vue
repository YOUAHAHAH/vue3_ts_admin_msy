<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="80px"
    class="demo-ruleForm"
    status-icon
  >
    <el-form-item label="发件人" prop="from">
      <el-input v-model="ruleForm.from" disabled />
    </el-form-item>
    <el-form-item label="收件人" prop="to">
      <el-input v-model="ruleForm.to" />
    </el-form-item>
    <el-form-item label="主题" prop="subject">
      <el-input v-model="ruleForm.subject" />
    </el-form-item>
    <el-form-item label="邮件内容" prop="text">
      <el-input v-model="ruleForm.text" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        :loading="loading"
        @click="submitForm(ruleFormRef)"
      >
        发送
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { sendEmail } from "@/api/modules/list";
import type { FormInstance, FormRules } from "element-plus";

interface email {
  from: string;
  subject: string;
  to: string;
  text: string;
}

let loading = ref<boolean>(false);
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<email>({
  from: "1154090379@qq.com",
  subject: "",
  to: "",
  text: "",
});

const checkEmail = (rule: any, value: string, callback: any) => {
  const regMobile = /^[1-9][0-9]{4,10}@qq.com$/;
  if (regMobile.test(value)) {
    return callback();
  }
  callback(new Error("请输入正确的QQ邮箱"));
};

const rules = reactive<FormRules>({
  subject: [{ required: true, message: "请填写邮件主题", trigger: "blur" }],
  to: [
    { required: true, message: "请填写收件人", trigger: "blur" },
    {
      validator: checkEmail,
      trigger: "blur",
    },
  ],
  text: [{ required: true, message: "请填写邮件内容", trigger: "blur" }],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      loading.value = true;
      setTimeout(() => {
        sendEmail(ruleForm);
        ElMessage.success("发送成功");
      }, 5000);
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style scoped></style>
