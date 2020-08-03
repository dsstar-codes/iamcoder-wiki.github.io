Object.assign(window.search, {"doc_urls":["introduction.html#iamcoder-wiki","what-is-iamcoder.html#iamcoder","algorithm/sort.html#sort","algorithm/sort.html#sort정렬이란"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":2,"title":2},"1":{"body":0,"breadcrumbs":1,"title":1},"2":{"body":0,"breadcrumbs":1,"title":1},"3":{"body":36,"breadcrumbs":1,"title":1}},"docs":{"0":{"body":"안녕하세요. 나코더(나는코더다) 위키입니다.","breadcrumbs":"IamCoder Wiki","id":"0","title":"IamCoder Wiki"},"1":{"body":"","breadcrumbs":"IamCoder","id":"1","title":"IamCoder"},"2":{"body":"","breadcrumbs":"Sort","id":"2","title":"Sort"},"3":{"body":"프로그래밍에서 정렬이란 무작위로 있는 여러 자료들의 순서를 규칙성 있게 재배열하는 것을 뜻한다. 오름차순, 또는 내림차순으로 정렬하는 것이 일반적이나, 내가 임의로 정한 규칙에 따라 정렬해야 하는 경우도 있다. 정렬해야 하는 자료들의 개수가 $n$일 때, 정렬알고리즘은 크게 시간복잡도가 $O(n^2)$, $O(nlogn)$과 그 이외인 것으로 나뉘는데, 초급단계에서는 이 $O(n^2)$ 방법만 알아도 큰 무리는 없다. 구현이 $5$에서 $6$줄 정도로 매우 짧고 개념도 직관적으로 이해가 쉽기 때문이다. 그러나 중급단계 이상에서는 $100000$개 이상의 자료들을 정렬해야 하는 경우가 생겨 $O(n^2)$방법으로는 시간초과가 나게 된다. 따라서 $O(nlogn)$정렬을 기용해야 하는데, 구현이 모두 $20$줄 이상으로 생각보다 쉽지만은 않다. 그러나 우리에게는 하나의 무기가 있는데, 그게 뭔지는 차차 알아가 보도록 하자. 이제부터 설명을 시작할 건데, 이하의 예시코드는 다음의 함수 $sortarr()$ 안에 들어갈 코드로 하자. $n$개의 $int$형 자료를 오름차순으로 정렬하여 순서대로 출력하는 프로그램을 다음과 같이 구현하자. #include <bits/stdc++.h>\nusing namespace std;\nint arr[100010], n;\nint main() { scanf(\"%d\", &n); for(int i=1; i<=n; i++) scanf(\"%d\", &arr[i]); sortarr(); //여기 for(int i=1; i<=n; i++) printf(\"%d \", arr[i]);\n}","breadcrumbs":"Sort(정렬)이란?","id":"3","title":"Sort(정렬)이란?"}},"length":4,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"0":{"0":{"0":{"0":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"5":{"df":1,"docs":{"3":{"tf":1.0}}},"6":{"df":1,"docs":{"3":{"tf":1.0}}},"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"[":{"1":{"0":{"0":{"0":{"1":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"d":{"c":{"+":{"+":{".":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"(":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}},"i":{"<":{"=":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"=":{"1":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"m":{"c":{"df":0,"docs":{},"o":{"d":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":1,"docs":{"3":{"tf":2.0}}},"o":{"(":{"df":0,"docs":{},"n":{"^":{"2":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"(":{"\"":{"%":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"s":{"c":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"(":{"\"":{"%":{"d":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}},"t":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"breadcrumbs":{"root":{"1":{"0":{"0":{"0":{"0":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"5":{"df":1,"docs":{"3":{"tf":1.0}}},"6":{"df":1,"docs":{"3":{"tf":1.0}}},"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"[":{"1":{"0":{"0":{"0":{"1":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"d":{"c":{"+":{"+":{".":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"(":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}},"i":{"<":{"=":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"=":{"1":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"m":{"c":{"df":0,"docs":{},"o":{"d":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":1,"docs":{"3":{"tf":2.0}}},"o":{"(":{"df":0,"docs":{},"n":{"^":{"2":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"(":{"\"":{"%":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"s":{"c":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"(":{"\"":{"%":{"d":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}}}}},"t":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}},"title":{"root":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"m":{"c":{"df":0,"docs":{},"o":{"d":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});