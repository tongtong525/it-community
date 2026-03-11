# 📋 Autodesk 疑难问题专区 - 部署说明

## 🎯 功能说明

已创建完整的 Autodesk 疑难问题解答专区，包含：

1. **网页版 FAQ** - 可在线浏览的结构化内容
2. **PDF 下载** - 保留原文件（含图片）
3. **搜索功能** - 快速查找问题
4. **分类浏览** - 按问题类型分类

---

## 📁 文件结构

```
it-community/
├── index.html                    # 主页（已添加 Autodesk 入口）
├── autodesk/
│   └── index.html                # Autodesk 专区页面
├── downloads/                    # PDF 存放目录
│   └── Autodeskyinan.pdf         # ← 需要复制到这里
└── deploy-pdf.bat                # PDF 部署脚本
```

---

## 🚀 部署步骤

### 方式一：自动部署（推荐）

1. 双击运行 `deploy-pdf.bat`
2. 脚本会自动复制 PDF 到正确位置
3. 完成！

### 方式二：手动部署

1. 复制 `E:\Downloads\Autodeskyinan.pdf` 到：
   ```
   C:\Users\wb.liuchongjun01.CN\.openclaw\workspace\it-community\downloads\Autodeskyinan.pdf
   ```

---

## 🌐 访问方式

### 本地访问
```bash
cd C:\Users\wb.liuchongjun01.CN\.openclaw\workspace\it-community
python -m http.server 8000
```

访问地址：
- **主页**: http://localhost:8000
- **Autodesk 专区**: http://localhost:8000/autodesk

### GitHub Pages（已部署）

推送更新到 GitHub：
```bash
cd it-community
git add .
git commit -m "Add Autodesk support section"
git push
```

等待 1-2 分钟后访问：
```
https://tongtong525.github.io/it-community/autodesk/
```

---

## 📝 内容分类

Autodesk 专区包含以下分类：

| 分类 | 内容 |
|------|------|
| 📦 安装与激活 | 安装错误、激活问题、许可证管理 |
| 🔴 常见错误代码 | 0005.0、12029、1603 等 |
| ⚡ 性能优化 | 卡顿优化、大文件处理 |
| 🎨 功能使用技巧 | 文件恢复、批量打印、自定义命令 |
| 💾 文件兼容性 | 版本转换、外部参照 |

---

## 🎨 自定义内容

### 修改 FAQ 内容

编辑 `autodesk/index.html`，找到对应的 FAQ 项目修改：

```html
<div class="faq-item">
    <div class="faq-question">你的问题</div>
    <div class="faq-answer">
        你的答案...
    </div>
</div>
```

### 添加更多分类

```html
<div class="faq-category" data-category="your-category">
    <h2>分类标题</h2>
    <!-- FAQ 项目 -->
</div>
```

---

## 💡 提示

1. **PDF 文件较大？** - 可以压缩后上传，或提供网盘链接
2. **需要更新内容？** - 直接编辑 `autodesk/index.html`
3. **添加图片？** - 在 FAQ 中使用 `<img>` 标签，图片放在 `images/` 目录

---

## 📞 技术支持

如有问题，请联系：
- 📧 support@itcommunity.com
- 💬 GitHub Issues

---

**更新时间**: 2026-03-11  
**版本**: 1.0.0
