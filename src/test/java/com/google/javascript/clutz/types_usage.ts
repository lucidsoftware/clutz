import * as t from 'goog:types';

function thing({a, b}: {a: string, b: number}) {
  console.log(a, 1 + b);
}
thing(t.recordType);

let arr: any[] | null = t.f;
