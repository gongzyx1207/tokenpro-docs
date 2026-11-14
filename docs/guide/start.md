# 快速开始

欢迎使用 TokenPro AI API 服务。

本文将帮助你完成账户注册、API Key 创建和首次 API 调用。

## 一、准备工作

在开始之前，你需要：

- 一个 TokenPro 账户。
- 一个已经创建的 API Key。
- 账户中有足够的可用余额。
- 一个支持发送 HTTP 请求的开发环境。

## 二、注册并登录

访问 TokenPro 平台，注册账户并登录。

登录后，你可以在用户中心查看账户信息、余额和 API 使用情况。

## 三、创建 API Key

1. 登录 TokenPro。
2. 进入 API 密钥管理页面。
3. 点击创建新的 API Key。
4. 根据需要设置名称、额度和分组。
5. 保存并复制生成的 API Key。

::: warning 安全提醒
API Key 相当于账户访问凭证，请勿公开分享，也不要提交到 GitHub 等公开代码仓库。
:::

## 四、配置 API 请求

TokenPro 通过统一 API 接口提供模型调用服务。

建议先准备以下信息：

| 配置项 | 说明 |
| --- | --- |
| API Base URL | TokenPro 提供的 API 接口地址 |
| API Key | 在控制台创建的 API 密钥 |
| Model | 你希望调用的模型名称 |

具体 Base URL 和模型名称，请以 TokenPro 控制台及实际开放的模型列表为准。

## 五、首次 API 调用

以下是 OpenAI 兼容接口的请求示例。

请先确认你的 TokenPro 已配置对应模型和兼容渠道，再执行请求。

```bash
curl https://你的TokenPro接口地址/v1/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "YOUR_MODEL_NAME",
    "messages": [
      {
        "role": "user",
        "content": "你好，请介绍一下你自己。"
      }
    ]
  }'
```

将示例中的接口地址、API Key 和模型名称替换为你自己的实际信息。

## 六、常见问题

### 1. 为什么 API 调用失败？

请检查：

- API Key 是否正确。
- 账户余额是否充足。
- 模型名称是否正确。
- 当前用户分组是否有对应模型权限。
- 上游渠道是否正常。

### 2. API Key 可以公开吗？

不可以。请妥善保管密钥。

### 3. 如何查看调用费用？

登录 TokenPro 用户中心，查看使用记录和余额变化。

## 七、获取更多帮助

如果你在接入过程中遇到问题，请联系 TokenPro 技术支持。
