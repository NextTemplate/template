export {};

// オブジェクトをマージする1
const a: object = { a: "a" };
const b: object = { b: "b" };
const c: object = Object.assign(a, b);
console.log(c);

// マージ2
const d: object = { ...a, ...b };

// foreachで要素を回す
const arry: string[] = ["a", "b"];
arry.forEach(() => (elem: string[], i: string[]) => {
  console.log(elem);
});
console.log(arry);

// 配列の評価
Array.isArray(arry);
console.log(arry);

// 配列の中身の要素を連結する1
const array1 = ["a", "b", "c"];
const arrayAnser = array1.join("");
console.log(arrayAnser);

// 配列の中身の要素を連結する2
const array2 = ["a", "b", "c"];
let str = "";
const count = array2.length;
for (let i = 0; i < count; i++) {
  str += array2[i];
}
str;

// id番号が若い順にソートする
interface Student {
  id: number;
  name: string;
}
const arry3: Array<Student> = [
  { id: 1, name: "morita" },
  { id: 3, name: "kenji" },
  { id: 4, name: "uno" },
  { id: 2, name: "ken" },
];
arry3.sort((firstObject: Student, secondObject: Student) =>
  firstObject.id > secondObject.id ? 1 : -1
);
console.log(arry3);

// コンポーネントをオブジェクトに格納し、idでソート、条件別に出力できるのかな？
