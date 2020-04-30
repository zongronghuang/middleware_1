# Middleware 應用
---
Alpha Camp 學期三期末考迷你專案[<sup>1</sup>](#1)

此專案提供路由偵測功能，顯示各個 HTTP request 的資訊：
* **收到時間**
* **HTTP 方法**
* **來源網址的相對路徑**

![Demo](/Demo.png)

## 安裝專案及相依套件
---
若要執行此專案，請在 console 內執行下列步驟：

1. 從 GitHub 下載此專案：
```
git clone https://github.com/zongronghuang/middleware_1.git middleware_1
``` 
2. 前往 **middleware_1** 資料夾。

3. 透過 console 安裝下列相依套件：
```
    npm install express 
                express-handlebars
                method-override
                nodemon 
```

4. 啟動本地伺服器：
```
    npm run start
```

5. 開啟網路瀏覽器並輸入下列網址：
```
    localhost:3000
```

6. 現在您已可以開始使用此專案。

## 功能
---
1. 按一下介面上的按鍵來觸發路由。

2. console 上會顯示路由資訊：
```
  [收到時間] | [HTTP 方法] from [來源網址的相對路徑]
```

  例如：
```
    2020-04-30 08:51:21 | GET from /
```






---
<a class="anchor" id="1">1</a>: 此專案及所有內容皆作為學習用途，並無侵犯著作權之意圖。