# bigdata_web_template
结合 vue-cli3 的 preset 搭建基于 git repo 的前端项目模板

## 快速开始

```bash
# 安装 vue-cli 3.0
npm install -g @vue/cli

# 根据本地 preset,从 gitlab 创建项目（需要输入你的 gitlab 账号信息）
vue create --preset direct:http://192.168.100.108/root/bigdata_web_template my-project --clone

#or
vue create --preset direct:git@192.168.100.108:root/bigdata_web_template.git my-project --clone

# 本地预览
cd my-project && npm run serve

```

## 文档
```bash
# 本地预览
npm run docs:dev

# 构建部署版本
npm run docs:build
```