// const now = new Date(); //获取本地当前时间
// console.dir(now); //Sun May 07 2023 20:26:12 GMT+0800 (China Standard Time)
// const d1 = new Date(2001, 1, 3, 14, 15, 16, 999); //2001年2月3日14点15分16秒999毫秒
// console.dir(d1); //Sat Feb 03 2001 14:15:16 GMT+0800 (China Standard Time)
// const d2 = new Date(1_6000_0000_0000); //时间戳
// console.dir(d2); //Sun Sep 13 2020 20:26:40 GMT+0800 (China Standard Time)
// const d3 = new Date("2022-09-08 9:08:06.99"); //获取本地时间即北京时间
// console.dir(d3); //Thu Sep 08 2022 09:08:06 GMT+0800 (China Standard Time)
// const d4 = new Date("2022-09-08 9:08:06.99+0000"); //获取标准时间，东八区+08:00
// console.dir(d4); //Thu Sep 08 2022 17:08:06 GMT+0800 (China Standard Time)

//判断是否闰年
// const isLeapYear = (year) => {
//   return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
// };
// console.log(isLeapYear(2100))//false

// const isLeapYear = (year) => {
//   const d = new Date(year, 1, 29);
//   if (d.getDate() === 29) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isLeapYear(2100)); //false

//判断本月最后一天
// const getLastDayOfMonth = (d) => {
//   const d2 = new Date(d);
//   d2.setDate(1);
//   d2.setMonth(d2.getMonth() + 1);
//   const d3 = new Date(+d2 - 86400_000);
//   return d3.getDate();
// };
// const x = getLastDayOfMonth(new Date(2000, 1, 2, 13, 14, 15));
// console.dir(x);//29

//输出2001年02月03日 14:15
// const printDate = (d) => {
//   const year = d.getFullYear();
//   const month = d.getMonth() + 1;
//   const day = d.getDate();
//   const hour = d.getHours();
//   const minute = d.getMinutes();
//   return `${year}年${month}月${day}日 ${hour}:${minute}`;
// };
// const x = printDate(new Date(2001, 1, 3, 14, 15));
// console.dir(x);

//Date库
function Time(year, month, ...rest) {
  if (arguments.length === 0) {
    this.d = new Date();
  } else if (arguments.length === 1) {
    this.d = new Date(`${year}-01-01`);
  } else if (arguments.length >= 2) {
    this.d = new Date(year, month - 1, ...rest);
  }
}
Time.prototype = {
  constructor: Time,
  clone() {
    return new Time(this.d);
  },
  year(value) {
    if (arguments.length === 0) {
      return this.d.getFullYear();
    } else {
      this.d.setFullYear(value);
      return this;
    }
  },
  month(value) {
    if (arguments.length === 0) {
      return this.d.getMonth() + 1;
    } else {
      this.d.setMonth(value - 1);
      return this;
    }
  },
  day(value) {
    if (arguments.length === 0) {
      return this.d.getDate();
    } else {
      this.d.setDate(value);
      return this;
    }
  },
  hours(value) {
    if (arguments.length === 0) {
      return this.d.getHours();
    } else {
      this.d.setHours(value);
      return this;
    }
  },
  minutes(value) {
    if (arguments.length === 0) {
      return this.d.getMinutes();
    } else {
      this.d.setMinutes(value);
      return this;
    }
  },
  seconds(value) {
    if (arguments.length === 0) {
      return this.d.getSeconds();
    } else {
      this.d.setSeconds(value);
      return this;
    }
  },
  milliseconds(value) {
    if (arguments.length === 0) {
      return this.d.getMilliseconds();
    } else {
      this.d.setMilliseconds(value);
      return this;
    }
  },
  add(n, unit) {
    const copy = this.clone();
    if (unit.endsWith("s")) {
      unit = unit.slice(0, -1);
    }
    if (map[unit] === undefined) {
      throw new Error("invalid unit 无效的单位:" + unit);
    }
    map[unit](copy.d, n);
    return copy;
  },
  sub(n, unit) {
    return this.add(-n, unit);
  },
  isLeapYear() {
    const year = this.d.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  },
  LastDayOfMonth() {
    const copy = this.clone();
    copy.d.setDate(1);
    return copy.add(1, "month").sub(1, "day");
  },
  /**
   * 格式化输出日期字符串
   * 目前只支持 yyyy MM dd HH mm ss
   * 格式化模板，如'yyyy-MM-dd HH:mm:ss'
   */
  format(str) {
    return str
      .replace(/yyyy/g, this.year())
      .replace(/MM/g, this.month().toString().padStart(2, "0"))
      .replace(/dd/g, this.day().toString().padStart(2, "0"))
      .replace(/HH/g, this.hours().toString().padStart(2, "0"))
      .replace(/mm/g, this.minutes().toString().padStart(2, "0"))
      .replace(/ss/g, this.seconds().toString().padStart(2, "0"));
  },
};
//表驱动
const map = {
  year: (copy, n) => copy.setFullYear(copy.getFullYear() + n),
  month: (copy, n) => copy.setMonth(copy.getMonth() + n),
  day: (copy, n) => copy.setDate(copy.getDate() + n),
  hour: (copy, n) => copy.setHours(copy.getHours() + n),
  minute: (copy, n) => copy.setMinutes(copy.getMinutes() + n),
  second: (copy, n) => copy.setSeconds(copy.getSeconds() + n),
  millisecond: (copy, n) => copy.setMilliseconds(copy.getMilliseconds() + n),
};
//加/减几年几月几日几时几分几秒几毫秒
const t = new Time(2000, 6, 7, 13, 14, 15, 666);
const x = t.add(8, "year").add(8, "month").add(23, "day");
console.dir(x); // Mon Mar 02 2009 13:14:15 GMT+0800 (China Standard Time) {}
// const y = t.add(7, "hio"); //报错，无效单位
const z = t.sub(6, "year");
console.dir(z); // Tue Jun 07 1994 13:14:15 GMT+0800 (China Standard Time)
//判断是否闰年
const t1 = new Time(2020, 2, 2);
console.dir(t1.isLeapYear()); //true
//判断最后一天
const t2 = new Time("2001-02-08 08:00:00.000 +0800");
console.dir(t2.LastDayOfMonth().d.getDate()); //28
//格式化模板，如'yyyy-MM-dd HH:mm:ss'
const t3 = new Time(2021, 5, 20, 13, 14, 15);
console.dir(t3.format("yyyy-MM-dd HH:mm:ss")); //2021-05-20 13:14:15
