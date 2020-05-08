<div _nghost-fhb-c11="" ng-version="9.0.7"><h1 _ngcontent-fhb-c11="">Comparison of the Elvis Operator in Angular and TypeScript</h1><p _ngcontent-fhb-c11=""> In JavaScript there are 6 falsey values: NaN, 0, false, "" (empty string), null, and undefined.

</p><h2 _ngcontent-fhb-c11="">Equality Matrix</h2><p _ngcontent-fhb-c11=""> See this equality matrix as well: <a _ngcontent-fhb-c11="" href="https://dorey.github.io/JavaScript-Equality-Table/">https://dorey.github.io/JavaScript-Equality-Table/</a></p><p _ngcontent-fhb-c11="">Equality is treated the same in both Angular and TypeScript.</p><h3 _ngcontent-fhb-c11="">Angular:</h3><table _ngcontent-fhb-c11=""><tr _ngcontent-fhb-c11=""><th _ngcontent-fhb-c11=""></th><th _ngcontent-fhb-c11=""> NaN </th><th _ngcontent-fhb-c11=""> 0 </th><th _ngcontent-fhb-c11=""> false </th><th _ngcontent-fhb-c11=""> "" (empty string) </th><th _ngcontent-fhb-c11=""> null </th><th _ngcontent-fhb-c11=""> undefined </th><!--bindings={
  "ng-reflect-ng-for-of": "NaN,0,false,,,"
}--></tr><tr _ngcontent-fhb-c11=""><th _ngcontent-fhb-c11=""> NaN </th><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN == NaN =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN === NaN =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN == 0 =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN === 0 =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN == false =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN === false =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN == "" (empty string) =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN === "" (empty string) =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN == null =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN === null =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN == undefined =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN === undefined =&gt; false </div></td><!--bindings={
  "ng-reflect-ng-for-of": "NaN,0,false,,,"
}--></tr><tr _ngcontent-fhb-c11=""><th _ngcontent-fhb-c11=""> 0 </th><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> 0 == NaN =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> 0 === NaN =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> 0 == 0 =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> 0 === 0 =&gt; true </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> 0 == false =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> 0 === false =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> 0 == "" (empty string) =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> 0 === "" (empty string) =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> 0 == null =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> 0 === null =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> 0 == undefined =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> 0 === undefined =&gt; false </div></td><!--bindings={
  "ng-reflect-ng-for-of": "NaN,0,false,,,"
}--></tr><tr _ngcontent-fhb-c11=""><th _ngcontent-fhb-c11=""> false </th><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> false == NaN =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> false === NaN =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> false == 0 =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> false === 0 =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> false == false =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> false === false =&gt; true </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> false == "" (empty string) =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> false === "" (empty string) =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> false == null =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> false === null =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> false == undefined =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> false === undefined =&gt; false </div></td><!--bindings={
  "ng-reflect-ng-for-of": "NaN,0,false,,,"
}--></tr><tr _ngcontent-fhb-c11=""><th _ngcontent-fhb-c11=""> "" (empty string) </th><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> "" (empty string) == NaN =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> "" (empty string) === NaN =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> "" (empty string) == 0 =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> "" (empty string) === 0 =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> "" (empty string) == false =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> "" (empty string) === false =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> "" (empty string) == "" (empty string) =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> "" (empty string) === "" (empty string) =&gt; true </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> "" (empty string) == null =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> "" (empty string) === null =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> "" (empty string) == undefined =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> "" (empty string) === undefined =&gt; false </div></td><!--bindings={
  "ng-reflect-ng-for-of": "NaN,0,false,,,"
}--></tr><tr _ngcontent-fhb-c11=""><th _ngcontent-fhb-c11=""> null </th><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> null == NaN =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> null === NaN =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> null == 0 =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> null === 0 =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> null == false =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> null === false =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> null == "" (empty string) =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> null === "" (empty string) =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> null == null =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> null === null =&gt; true </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> null == undefined =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> null === undefined =&gt; false </div></td><!--bindings={
  "ng-reflect-ng-for-of": "NaN,0,false,,,"
}--></tr><tr _ngcontent-fhb-c11=""><th _ngcontent-fhb-c11=""> undefined </th><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> undefined == NaN =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> undefined === NaN =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> undefined == 0 =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> undefined === 0 =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> undefined == false =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> undefined === false =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> undefined == "" (empty string) =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> undefined === "" (empty string) =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> undefined == null =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> undefined === null =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> undefined == undefined =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> undefined === undefined =&gt; true </div></td><!--bindings={
  "ng-reflect-ng-for-of": "NaN,0,false,,,"
}--></tr><!--bindings={
  "ng-reflect-ng-for-of": "NaN,0,false,,,"
}--></table><h3 _ngcontent-fhb-c11="">TypeScript:</h3><table _ngcontent-fhb-c11=""><tr _ngcontent-fhb-c11=""><th _ngcontent-fhb-c11=""></th><th _ngcontent-fhb-c11=""> NaN </th><th _ngcontent-fhb-c11=""> 0 </th><th _ngcontent-fhb-c11=""> false </th><th _ngcontent-fhb-c11=""> "" (empty string) </th><th _ngcontent-fhb-c11=""> null </th><th _ngcontent-fhb-c11=""> undefined </th><!--bindings={
  "ng-reflect-ng-for-of": "NaN,0,false,,,"
}--></tr><tr _ngcontent-fhb-c11=""><th _ngcontent-fhb-c11=""> NaN </th><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN == NaN =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN === NaN =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN == 0 =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN === 0 =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN == false =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN === false =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN == "" (empty string) =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN === "" (empty string) =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN == null =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN === null =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN == undefined =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> NaN === undefined =&gt; false </div></td><!--bindings={
  "ng-reflect-ng-for-of": "NaN,0,false,,,"
}--></tr><tr _ngcontent-fhb-c11=""><th _ngcontent-fhb-c11=""> 0 </th><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> 0 == NaN =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> 0 === NaN =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> 0 == 0 =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> 0 === 0 =&gt; true </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> 0 == false =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> 0 === false =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> 0 == "" (empty string) =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> 0 === "" (empty string) =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> 0 == null =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> 0 === null =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> 0 == undefined =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> 0 === undefined =&gt; false </div></td><!--bindings={
  "ng-reflect-ng-for-of": "NaN,0,false,,,"
}--></tr><tr _ngcontent-fhb-c11=""><th _ngcontent-fhb-c11=""> false </th><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> false == NaN =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> false === NaN =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> false == 0 =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> false === 0 =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> false == false =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> false === false =&gt; true </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> false == "" (empty string) =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> false === "" (empty string) =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> false == null =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> false === null =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> false == undefined =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> false === undefined =&gt; false </div></td><!--bindings={
  "ng-reflect-ng-for-of": "NaN,0,false,,,"
}--></tr><tr _ngcontent-fhb-c11=""><th _ngcontent-fhb-c11=""> "" (empty string) </th><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> "" (empty string) == NaN =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> "" (empty string) === NaN =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> "" (empty string) == 0 =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> "" (empty string) === 0 =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> "" (empty string) == false =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> "" (empty string) === false =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> "" (empty string) == "" (empty string) =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> "" (empty string) === "" (empty string) =&gt; true </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> "" (empty string) == null =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> "" (empty string) === null =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> "" (empty string) == undefined =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> "" (empty string) === undefined =&gt; false </div></td><!--bindings={
  "ng-reflect-ng-for-of": "NaN,0,false,,,"
}--></tr><tr _ngcontent-fhb-c11=""><th _ngcontent-fhb-c11=""> null </th><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> null == NaN =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> null === NaN =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> null == 0 =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> null === 0 =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> null == false =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> null === false =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> null == "" (empty string) =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> null === "" (empty string) =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> null == null =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> null === null =&gt; true </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> null == undefined =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> null === undefined =&gt; false </div></td><!--bindings={
  "ng-reflect-ng-for-of": "NaN,0,false,,,"
}--></tr><tr _ngcontent-fhb-c11=""><th _ngcontent-fhb-c11=""> undefined </th><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> undefined == NaN =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> undefined === NaN =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> undefined == 0 =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> undefined === 0 =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> undefined == false =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> undefined === false =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> undefined == "" (empty string) =&gt; false </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> undefined === "" (empty string) =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> undefined == null =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="false" class="false"> undefined === null =&gt; false </div></td><td _ngcontent-fhb-c11=""><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> undefined == undefined =&gt; true </div><div _ngcontent-fhb-c11="" ng-reflect-ng-class="true" class="true"> undefined === undefined =&gt; true </div></td><!--bindings={
  "ng-reflect-ng-for-of": "NaN,0,false,,,"
}--></tr><!--bindings={
  "ng-reflect-ng-for-of": "NaN,0,false,,,"
}--></table><pre _ngcontent-fhb-c11="">    NaN is special because it is never equal to anything, including itself.
    NaN == NaN =&gt; (<span _ngcontent-fhb-c11="" class="value">false</span>)
    NaN === NaN =&gt; (<span _ngcontent-fhb-c11="" class="value">false</span>)
</pre><h2 _ngcontent-fhb-c11="">Angular Null Safe Operator and TypeScript Optional Chaining</h2><div _ngcontent-fhb-c11=""><a _ngcontent-fhb-c11="" href="https://angular.io/guide/template-syntax#the-safe-navigation-operator----and-null-property-paths" target="_blank"> https://angular.io/guide/template-syntax#the-safe-navigation-operator----and-null-property-paths</a><br _ngcontent-fhb-c11=""><a _ngcontent-fhb-c11="" href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining" target="_blank"> https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining</a></div><p _ngcontent-fhb-c11=""> Notice how null and undefined are handled differently:
</p>
<pre _ngcontent-fhb-c11="">
    Given:
        nanyObj = { foo: NaN }
    Angular: 
        nanyObj?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">NaN</span>)
        nanyObj?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
    TypeScript:
        nanyObj?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">NaN</span>)
        nanyObj?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
</pre>
<pre _ngcontent-fhb-c11="">
    Given:
        zeroObj = { foo: 0 }
    Angular:
        zeroObj?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">0</span>)
        zeroObj?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
    TypeScript:
        zeroObj?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">0</span>)
        zeroObj?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
</pre>
<pre _ngcontent-fhb-c11="">
    Given:
        falseyObj = { foo: false }
    Angular:
        falseyObj?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">false</span>)
        falseyObj?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
    TypeScript:
        falseyObj?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">false</span>)
        falseyObj?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
</pre>
<pre _ngcontent-fhb-c11="">
    Given:
        emptyStringObj = { foo: "" }
    Angular:
        emptyStringObj?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">"" (empty string)</span>)
        emptyStringObj?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
    TypeScript:
        emptyStringObj?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">"" (empty string)</span>)
        emptyStringObj?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
</pre>
<pre _ngcontent-fhb-c11="">
    Given:
        nullyObj = { foo: null }
    Angular:
        nullyObj?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">null</span>)
        nullyObj?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">null</span>)
    TypeScript:
        nullyObj?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">null</span>)
        nullyObj?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
</pre>
<pre _ngcontent-fhb-c11="">
    Given:
        undefinedyObj = { foo: undefined }
    Angular:
        undefinedyObj?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
        undefinedyObj?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">null</span>)
    TypeScript:
        undefinedyObj?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
        undefinedyObj?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
</pre><h2 _ngcontent-fhb-c11="">Array Handling with the Elvis Operator</h2><p _ngcontent-fhb-c11="">Note the differences in syntax:</p><p _ngcontent-fhb-c11=""> Notice how null and undefined are handled differently:
</p>
<pre _ngcontent-fhb-c11="">
    Given:
        nanyObj = { arr: [ { foo: NaN } ] }
    Angular: 
        (nanyObj?.arr)[0]?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">NaN</span>)
        (nanyObj?.arr)[0]?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
    TypeScript:
        nanyObj?.arr?.[0]?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">NaN</span>)
        nanyObj?.arr?.[0]?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
</pre>
<pre _ngcontent-fhb-c11="">
    Given:
        zeroObj = { arr: [ { foo: 0 } ] }
    Angular:
        (zeroObj?.arr)[0]?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">0</span>)
        (zeroObj?.arr)[0]?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
    TypeScript:
        zeroObj?.arr?.[0]?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">0</span>)
        zeroObj?.arr?.[0]?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
</pre>
<pre _ngcontent-fhb-c11="">
    Given:
        falseyObj = { arr: [ { foo: false } ] }
    Angular:
        (falseyObj?.arr)[0]?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">false</span>)
        (falseyObj?.arr)[0]?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
    TypeScript:
        falseyObj?.arr?.[0]?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">false</span>)
        falseyObj?.arr?.[0]?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
</pre>
<pre _ngcontent-fhb-c11="">
    Given:
        emptyStringObj = { arr: [ { foo: "" } ] }
    Angular:
        (emptyStringObj?.arr)[0]?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">"" (empty string)</span>)
        (emptyStringObj?.arr)[0]?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
    TypeScript:
        emptyStringObj?.arr?.[0]?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">"" (empty string)</span>)
        emptyStringObj?.arr?.[0]?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
</pre>
<pre _ngcontent-fhb-c11="">
    Given:
        nullyObj = { arr: [ { foo: null } ] }
    Angular:
        (nullyObj?.arr)[0]?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">null</span>)
        (nullyObj?.arr)[0]?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">null</span>)
    TypeScript:
        nullyObj?.arr?.[0]?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">null</span>)
        nullyObj?.arr?.[0]?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
</pre>
<pre _ngcontent-fhb-c11="">
    Given:
        undefinedyObj = { arr: [ { foo: undefined } ] }
    Angular:
        (undefinedyObj?.arr)[0]?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
        (undefinedyObj?.arr)[0]?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">null</span>)
    TypeScript:
        undefinedyObj?.arr?.[0]?.foo =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
        undefinedyObj?.arr?.[0]?.foo?.bar =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)

</pre><h2 _ngcontent-fhb-c11="">Short Circuting with the Elvis Operator</h2>
<pre _ngcontent-fhb-c11="">
    Given:
        nanyObj = { foo: NaN }
    Angular: 
        nanyObj.foo?.not.a.property =&gt; <span _ngcontent-fhb-c11="" class="error">ERROR</span>
        nanyObj.foo?.not?.a.property =&gt; (<span _ngcontent-fhb-c11="" class="value">null</span>)
    TypeScript:
        nanyObj.foo?.not.a.property =&gt; <span _ngcontent-fhb-c11="" class="error">ERROR</span>
        nanyObj.foo?.not?.a.property =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
</pre>
<pre _ngcontent-fhb-c11="">
    Given:
        zeroObj = { foo: 0 }
    Angular:
        zeroObj.foo?.not.a.property =&gt; <span _ngcontent-fhb-c11="" class="error">ERROR</span>
        zeroObj.foo?.not?.a.property =&gt; (<span _ngcontent-fhb-c11="" class="value">null</span>)
    TypeScript:
        zeroObj.foo?.not.a.property =&gt; <span _ngcontent-fhb-c11="" class="error">ERROR</span>
        zeroObj.foo?.not?.a.property =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
</pre>
<pre _ngcontent-fhb-c11="">
    Given:
        falseyObj = { foo: false }
    Angular:
        falseyObj.foo?.not.a.property =&gt; <span _ngcontent-fhb-c11="" class="error">ERROR</span>
        falseyObj.foo?.not?.a.property =&gt; (<span _ngcontent-fhb-c11="" class="value">null</span>)
    TypeScript:
        falseyObj.foo?.not.a.property =&gt; <span _ngcontent-fhb-c11="" class="error">ERROR</span>
        falseyObj.foo?.not?.a.property =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
</pre>
<pre _ngcontent-fhb-c11="">
    Given:
        emptyStringObj = { foo: "" }
    Angular:
        emptyStringObj.foo?.not.a.property =&gt; <span _ngcontent-fhb-c11="" class="error">ERROR</span>
        emptyStringObj.foo?.not?.a.property =&gt; (<span _ngcontent-fhb-c11="" class="value">null</span>)
    TypeScript:
        emptyStringObj.foo?.not.a.property =&gt; <span _ngcontent-fhb-c11="" class="error">ERROR</span>
        emptyStringObj.foo?.not?.a.property =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
</pre>
<pre _ngcontent-fhb-c11="">
    Given:
        nullyObj = { foo: null }
    Angular:
        nullyObj.foo?.not.a.property =&gt; (<span _ngcontent-fhb-c11="" class="value">null</span>)
        nullyObj.foo?.not?.a.property =&gt; (<span _ngcontent-fhb-c11="" class="value">null</span>)
    TypeScript:
        nullyObj.foo?.not.a.property =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
        nullyObj.foo?.not?.a.property =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
</pre>
<pre _ngcontent-fhb-c11="">
    Given:
        undefinedyObj = { foo: undefined }
    Angular:
        undefinedyObj.foo?.not.a.property =&gt; (<span _ngcontent-fhb-c11="" class="value">null</span>)
        undefinedyObj.foo?.not?.a.property =&gt; (<span _ngcontent-fhb-c11="" class="value">null</span>)
    TypeScript:
        undefinedyObj.foo?.not.a.property =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
        undefinedyObj.foo?.not?.a.property =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)

</pre><h2 _ngcontent-fhb-c11="">Function Invocations with the Elvis Operator</h2><p _ngcontent-fhb-c11="">Note the function?.() syntax provided by TypeScript</p>
<pre _ngcontent-fhb-c11="">
    Given:
        nanyObj = { func: () =&gt; NaN }
    Angular: 
        nanyObj.func() =&gt; (<span _ngcontent-fhb-c11="" class="value">NaN</span>)
        nanyObj.func()?.foo() =&gt; <span _ngcontent-fhb-c11="" class="error">ERROR</span>
    TypeScript:
        nanyObj.func() =&gt; (<span _ngcontent-fhb-c11="" class="value">NaN</span>)
        nanyObj.func()?.foo() =&gt; <span _ngcontent-fhb-c11="" class="error">ERROR</span>
</pre>
<pre _ngcontent-fhb-c11="">
    Given:
        zeroObj = { func: () =&gt; 0 }
    Angular:
        zeroObj.func() =&gt; (<span _ngcontent-fhb-c11="" class="value">0</span>)
        zeroObj.func()?.foo() =&gt; <span _ngcontent-fhb-c11="" class="error">ERROR</span>
    TypeScript:
        zeroObj.func() =&gt; (<span _ngcontent-fhb-c11="" class="value">0</span>)
        zeroObj.func()?.foo() =&gt; <span _ngcontent-fhb-c11="" class="error">ERROR</span>
</pre>
<pre _ngcontent-fhb-c11="">
    Given:
        falseyObj = { func: () =&gt; false }
    Angular:
        falseyObj.func() =&gt; (<span _ngcontent-fhb-c11="" class="value">false</span>)
        falseyObj.func()?.foo() =&gt; <span _ngcontent-fhb-c11="" class="error">ERROR</span>
    TypeScript:
        falseyObj.func() =&gt; (<span _ngcontent-fhb-c11="" class="value">false</span>)
        falseyObj.func()?.foo() =&gt; <span _ngcontent-fhb-c11="" class="error">ERROR</span>
</pre>
<pre _ngcontent-fhb-c11="">
    Given:
        emptyStringObj = { func: () =&gt; "" }
    Angular:
        emptyStringObj.func() =&gt; (<span _ngcontent-fhb-c11="" class="value">"" (empty string)</span>)
        emptyStringObj.func()?.foo() =&gt; <span _ngcontent-fhb-c11="" class="error">ERROR</span>
    TypeScript:
        emptyStringObj.func() =&gt; (<span _ngcontent-fhb-c11="" class="value">"" (empty string)</span>)
        emptyStringObj.func()?.foo() =&gt; <span _ngcontent-fhb-c11="" class="error">ERROR</span>
</pre>
<pre _ngcontent-fhb-c11="">
    Given:
        nullyObj = { func: () =&gt; null }
    Angular:
        nullyObj.func() =&gt; (<span _ngcontent-fhb-c11="" class="value">null</span>)
        nullyObj.func()?.foo() =&gt; (<span _ngcontent-fhb-c11="" class="value">null</span>)
    TypeScript:
        nullyObj.func() =&gt; (<span _ngcontent-fhb-c11="" class="value">null</span>)
        nullyObj.func()?.foo() =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
</pre>
<pre _ngcontent-fhb-c11="">
    Given:
        undefinedyObj = { func: () =&gt; undefined }
    Angular:
        undefinedyObj.func() =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
        undefinedyObj.func()?.foo() =&gt; (<span _ngcontent-fhb-c11="" class="value">null</span>)
    TypeScript:
        undefinedyObj.func() =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
        undefinedyObj.func()?.foo() =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
</pre>
<pre _ngcontent-fhb-c11="">
    Given:
        voidy = () =&gt; void 0
    Angular:
        voidy() =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
        voidy?.() =&gt; <span _ngcontent-fhb-c11="" class="error">ERROR</span>
        voidy()?.notAFunction() =&gt; (<span _ngcontent-fhb-c11="" class="value">null</span>)
    TypeScript:
        voidy() =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
        voidy?.() =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)
        voidy()?.notAFunction() =&gt; (<span _ngcontent-fhb-c11="" class="value">undefined</span>)

</pre><h2 _ngcontent-fhb-c11="">Conclusion</h2><p _ngcontent-fhb-c11="">Angular's Elvis Operator prefers null and TypeScript's prefers undefined.</p><p _ngcontent-fhb-c11=""> Also study: <a _ngcontent-fhb-c11="" href="https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/" target="_blank">https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/</a></p></div>
