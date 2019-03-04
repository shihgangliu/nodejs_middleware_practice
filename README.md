# shopback_assignment

## 執行方式
- export NODE_ENV=${environment}
- cp config/default.json config/${environment}.json
- edit config file
- npm install
- node index.js

## 設計理念
將 request 和 response 獨立成 interface，使得未來不一定要
用 json file 的方式，也可以用其他 file 形式或是 http request
，這些都存放在 IOHandler 下，因為時間關係目前只有實作 JsonHandler
，並盡量讓底下的 method 合乎 http request 操作。但是這塊應
該可以再做得更好，比如說 JsonHandler 只處理 encode / dacode
部分，其餘可以丟給 request library 處理或是將 get / set method
移至 base.js 底下。

rules 的部分則以 base.js 為主要 interface，使得 rules 可以
水平擴增，並且依 config 的白名單設定只跑需要的 rules ，也便
於對每個 rule 獨立測試，全域設定（如rule9, rule10）則就在
base.js 下實作。

test 的部分則利用 mocha 和 chai.assert() 測試，base.js 是似
index.js 去模擬整個流程，其餘則針對個別 rule 做情境測試，
request_data 則存放各個情境的 request json file。
