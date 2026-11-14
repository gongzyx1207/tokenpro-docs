# API 接口概览

TokenPro 提供统一的 AI API 接入服务，帮助开发者通过标准 HTTP 接口调用平台已开放的模型。

## 一、API 基础信息

| 配置项 | 当前说明 |
| --- | --- |
| API Base URL | `http://47.101.35.192`（临时测试地址） |
| API 协议 | HTTPS（正式域名上线后启用） |
| 数据格式 | JSON |
| 请求认证 | Bearer Token |
| 字符编码 | UTF-8 |

::: warning 注意
目前使用的是临时 IP 测试地址，尚未配置 HTTPS。正式商业运营前，请绑定自己的域名并启用 HTTPS，不建议在不可信网络中使用该地址传输 API Key。
:::

## 二、认证方式

所有需要身份认证的 API 请求，都需要在 HTTP Header 中携带 API Key。

```http
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

请将 `YOUR_API_KEY` 替换为你在 TokenPro 控制台创建的实际密钥。

## 三、接口列表

以下为 OpenAI 兼容接口的基础示例，实际可用性取决于 TokenPro 中配置的模型和渠道。

| 接口 | 请求方式 | 路径 | 用途 |
| --- | --- | --- | --- |
| 模型列表 | GET | `/v1/models` | 查询可用模型 |
| Chat Completions | POST | `/v1/chat/completions` | 对话模型调用 |

## 四、查询模型列表

请求：

```bash
curl http://47.101.35.192/v1/models \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## 五、Chat Completions 调用

请求：

```bash
curl http://47.101.35.192/v1/chat/completions \
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

## 六、流式响应

对于支持流式输出的模型，可以在请求参数中设置：

```json
{
  "stream": true
}
```

流式响应通常使用 Server-Sent Events（SSE）传输。

具体支持情况以对应模型和渠道的实际配置为准。

## 七、错误处理

调用 API 时，如果请求失败，请重点检查：

- API Key 是否正确。
- 账户余额是否充足。
- 模型名称是否正确。
- 用户分组是否具有相应模型权限。
- 对应上游渠道是否正常。

## 八、安全建议

1. 不要在公开代码仓库中提交 API Key。
2. 不要在浏览器前端直接暴露 API Key。
3. 建议通过服务器后端调用 TokenPro API。
4. 正式上线后使用 HTTPS。
5. 定期检查 API 使用记录和账户余额。
